import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }

  try {
    const expected = Deno.env.get("PREP_CLOUD_WRITE_SECRET");
    const auth = req.headers.get("Authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
    if (!expected || token !== expected) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: { ...cors, "Content-Type": "application/json" }
      });
    }

    const body = await req.json();
    const url = Deno.env.get("SUPABASE_URL");
    const sr = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !sr) {
      throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    }

    const supabase = createClient(url, sr);

    if (body.op === "upsert_course") {
      const course_id = body.course_id;
      const data = body.data;
      if (!course_id || data == null) throw new Error("course_id and data required");
      const { error } = await supabase.from("prep_course_snapshots").upsert({
        course_id: String(course_id),
        data,
        updated_at: new Date().toISOString()
      });
      if (error) throw error;
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...cors, "Content-Type": "application/json" }
      });
    }

    if (body.op === "upsert_exercise") {
      const context_id = body.context_id;
      const data = body.data;
      if (!context_id || data == null) throw new Error("context_id and data required");
      const { error } = await supabase.from("prep_exercise_published").upsert({
        context_id: String(context_id),
        data,
        updated_at: new Date().toISOString()
      });
      if (error) throw error;
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...cors, "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ ok: false, error: "Unknown op" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" }
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" }
    });
  }
});
