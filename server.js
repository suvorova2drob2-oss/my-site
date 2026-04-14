const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const allowedOrigins = String(process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((x) => x.trim())
  .filter(Boolean);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins.length ? allowedOrigins : true,
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

const QUIZ = [
  { correct: 0 },
  { correct: 2 },
  { correct: 1 },
  { correct: 2 },
  { correct: 0 }
];

const rooms = {};

function makeCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function createRoom(teacherSocketId) {
  let code = makeCode();
  while (rooms[code]) code = makeCode();
  rooms[code] = {
    code,
    teacherSocketId,
    started: false,
    players: {}
  };
  return rooms[code];
}

function leaderboardOf(room) {
  const now = Date.now();
  return Object.values(room.players)
    .map((p) => {
      const progress = Math.min(100, Math.round((p.questionIndex / QUIZ.length) * 100));
      const finished = p.questionIndex >= QUIZ.length;
      return {
        id: p.id,
        name: p.name,
        correct: p.correct,
        wrong: p.wrong,
        questionIndex: p.questionIndex,
        progress,
        finished,
        finishedAt: p.finishedAt || null,
        activeMsAgo: now - p.lastActionAt
      };
    })
    .sort((a, b) => {
      if (a.progress !== b.progress) return b.progress - a.progress;
      if (a.wrong !== b.wrong) return a.wrong - b.wrong;
      if (a.finishedAt && b.finishedAt) return a.finishedAt - b.finishedAt;
      if (a.finishedAt && !b.finishedAt) return -1;
      if (!a.finishedAt && b.finishedAt) return 1;
      return a.name.localeCompare(b.name);
    });
}

function emitState(code) {
  const room = rooms[code];
  if (!room) return;
  io.to(code).emit("room:state", {
    code,
    started: room.started,
    questionCount: QUIZ.length,
    leaderboard: leaderboardOf(room)
  });
}

app.use(express.static(path.join(__dirname)));

io.on("connection", (socket) => {
  socket.on("teacher:create", ({ origin }) => {
    const room = createRoom(socket.id);
    socket.join(room.code);
    const joinUrl = `${origin || ""}/lexical-quiz-live.html?role=student&room=${room.code}`;
    socket.emit("room:created", { code: room.code, joinUrl });
    emitState(room.code);
  });

  socket.on("student:join", ({ roomCode, name }) => {
    const code = String(roomCode || "").trim().toUpperCase();
    const room = rooms[code];
    if (!room) {
      socket.emit("join:error", { message: "Room not found." });
      return;
    }
    if (room.started) {
      socket.emit("join:error", { message: "Game already started." });
      return;
    }
    const safeName = String(name || "").trim().slice(0, 24) || "Student";
    room.players[socket.id] = {
      id: socket.id,
      name: safeName,
      correct: 0,
      wrong: 0,
      questionIndex: 0,
      finishedAt: null,
      lastActionAt: Date.now()
    };
    socket.data.roomCode = code;
    socket.join(code);
    socket.emit("join:ok", { code, questionCount: QUIZ.length });
    emitState(code);
  });

  socket.on("teacher:start", ({ roomCode }) => {
    const code = String(roomCode || "").trim().toUpperCase();
    const room = rooms[code];
    if (!room || room.teacherSocketId !== socket.id) return;
    room.started = true;
    Object.values(room.players).forEach((p) => {
      p.correct = 0;
      p.wrong = 0;
      p.questionIndex = 0;
      p.finishedAt = null;
      p.lastActionAt = Date.now();
    });
    io.to(code).emit("game:started", { questionCount: QUIZ.length });
    emitState(code);
  });

  socket.on("student:answer", ({ roomCode, questionIndex, answerIndex }) => {
    const code = String(roomCode || "").trim().toUpperCase();
    const room = rooms[code];
    const player = room && room.players[socket.id];
    if (!room || !player || !room.started) return;
    if (player.questionIndex >= QUIZ.length) return;
    if (Number(questionIndex) !== player.questionIndex) return;

    const q = QUIZ[player.questionIndex];
    const isCorrect = Number(answerIndex) === q.correct;
    if (isCorrect) player.correct += 1;
    else player.wrong += 1;
    player.questionIndex += 1;
    player.lastActionAt = Date.now();
    if (player.questionIndex >= QUIZ.length) player.finishedAt = Date.now();

    socket.emit("answer:result", {
      isCorrect,
      correctIndex: q.correct,
      nextQuestionIndex: player.questionIndex
    });
    emitState(code);
  });

  socket.on("disconnect", () => {
    const code = socket.data.roomCode;
    if (code && rooms[code] && rooms[code].players[socket.id]) {
      delete rooms[code].players[socket.id];
      emitState(code);
    }

    for (const roomCode of Object.keys(rooms)) {
      const room = rooms[roomCode];
      if (room.teacherSocketId === socket.id) {
        io.to(roomCode).emit("room:closed");
        delete rooms[roomCode];
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Live quiz server running on http://localhost:${PORT}`);
});
