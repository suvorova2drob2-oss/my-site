/**
 * Fuzzy phrase matching for Web Speech transcripts vs lexical chips (Retell chain, voice bingo).
 * Pure helpers — no DOM.
 */
(function (W) {
  "use strict";

  function normalizeSpeech(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2019\u2018`´]/g, "'")
      .replace(/[^a-z0-9\s'-]/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  var LIGHT_STOP = { a: 1, an: 1, the: 1, i: 1 };

  function phraseTokensForSpeech(phrase) {
    return normalizeSpeech(phrase)
      .split(" ")
      .filter(function (w) {
        return w.length > 1 && !LIGHT_STOP[w];
      });
  }

  function levenshtein(a, b) {
    a = String(a);
    b = String(b);
    if (a === b) return 0;
    var al = a.length;
    var bl = b.length;
    if (!al) return bl;
    if (!bl) return al;
    var i;
    var j;
    var prev;
    var row = [];
    for (j = 0; j <= bl; j++) row[j] = j;
    for (i = 1; i <= al; i++) {
      prev = row[0];
      row[0] = i;
      for (j = 1; j <= bl; j++) {
        var cur = row[j];
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
        prev = cur;
      }
    }
    return row[bl];
  }

  /**
   * STT often splits/garbles one lexical item ("tearjerker" → "tia joker …").
   * Compare phrase to a sliding window over collapsed transcript with relaxed edit distance.
   * @param {string} pattern letters only (collapsed normalized phrase)
   * @param {string} stream letters only (collapsed normalized hay)
   * @param {number} ratio maxDist ≈ floor(pattern.length * ratio)
   */
  function slidingLevenshteinMatch(pattern, stream, ratio, spanRatio) {
    var pl = pattern.length;
    if (pl < 4 || stream.length < 4) return false;
    var maxDist = Math.max(3, Math.round(pl * ratio));
    var sr = spanRatio != null ? spanRatio : 0.36;
    var span = Math.max(2, Math.ceil(pl * sr));
    var winLen;
    var start;
    for (winLen = Math.max(4, pl - span); winLen <= pl + span; winLen++) {
      if (winLen > stream.length) continue;
      for (start = 0; start <= stream.length - winLen; start++) {
        if (levenshtein(pattern, stream.slice(start, start + winLen)) <= maxDist) {
          return true;
        }
      }
    }
    return false;
  }

  /** Collapsed alphanumeric phrase for rough shape match */
  function collapsedLetters(normSpaced) {
    return normSpaced.replace(/\s+/g, "");
  }

  /** Keep consonants only — robust when vowels are mangled by STT */
  function consonantSkeleton(normSpaced) {
    return normSpaced.replace(/[aeiou\s'-]/gi, "");
  }

  /**
   * Last-resort match for lenient / bingo when tokens look wrong but sound-shape is close.
   * @param {string} normPhrase normalizeSpeech(phrase)
   * @param {string} hay normalizeSpeech(transcript)
   */
  function roughSttShapeMatch(normPhrase, hay) {
    var p = collapsedLetters(normPhrase);
    var h = collapsedLetters(hay);
    if (p.length >= 5 && h.length >= p.length - 2 && slidingLevenshteinMatch(p, h, 0.62)) {
      return true;
    }
    var p2 = consonantSkeleton(normPhrase);
    var h2 = consonantSkeleton(hay);
    if (p2.length >= 4 && h2.length >= p2.length - 2) {
      return slidingLevenshteinMatch(p2, h2, 0.68);
    }
    return false;
  }

  /**
   * Stricter shape match for voice bingo — avoids one noisy transcript unlocking every clue.
   */
  function roughSttShapeMatchBingo(normPhrase, hay) {
    var p = collapsedLetters(normPhrase);
    var h = collapsedLetters(hay);
    if (p.length < 6 || h.length < 6) return false;
    if (slidingLevenshteinMatch(p, h, 0.46, 0.26)) return true;
    var p2 = consonantSkeleton(normPhrase);
    var h2 = consonantSkeleton(hay);
    if (p2.length < 5 || h2.length < 5) return false;
    return slidingLevenshteinMatch(p2, h2, 0.54, 0.26);
  }

  /**
   * Voice bingo only: multi-word answers need ALL tokens heard (or long-phrase shape fallback).
   * Single-word: fuzzy token + tighter consonant/collapsed match ("tearjerker" vs "tia joker…").
   */
  function phraseMatchesVoiceBingo(phrase, hay) {
    var normPhrase = normalizeSpeech(phrase);
    var normHay = normalizeSpeech(hay);
    if (!normPhrase || !normHay) return false;
    if (normHay.indexOf(normPhrase) !== -1) return true;

    var tokens = phraseTokensForSpeech(phrase);
    if (!tokens.length) tokens = normPhrase.split(" ").filter(Boolean);
    if (!tokens.length) return false;

    if (tokens.length === 1) {
      if (wordAppearsFuzzy(normHay, tokens[0], true)) return true;
      return roughSttShapeMatchBingo(normPhrase, normHay);
    }

    var needAll = tokens.length;
    if (countBagTokenHits(tokens, normHay, true) >= needAll) return true;
    if (countOrderedTokenHits(tokens, normHay, true) >= needAll) return true;

    if (collapsedLetters(normPhrase).length >= 12) {
      return roughSttShapeMatchBingo(normPhrase, normHay);
    }
    return false;
  }

  /** @param {boolean} lenient bingo / strong accents — wider edit distance */
  function fuzzyWords(w, token, lenient) {
    if (!w || !token) return false;
    if (w === token) return true;
    var maxLen = Math.max(w.length, token.length);
    var maxDist;
    if (lenient) {
      maxDist = maxLen <= 5 ? 2 : maxLen <= 12 ? 3 : 4;
      if (Math.abs(w.length - token.length) > maxDist + 1) return false;
    } else {
      maxDist = maxLen <= 4 ? 1 : maxLen <= 10 ? 2 : 3;
      if (Math.abs(w.length - token.length) > maxDist) return false;
    }
    return levenshtein(w, token) <= maxDist;
  }

  function findFuzzyTokenPosition(hay, token, minPos, lenient) {
    var sub = hay.slice(minPos);
    var idx = sub.indexOf(token);
    if (idx !== -1) return minPos + idx;
    var re = /[a-z0-9']+/g;
    var m;
    while ((m = re.exec(sub)) !== null) {
      var ww = m[0];
      if (ww === token || fuzzyWords(ww, token, lenient)) {
        return minPos + m.index;
      }
    }
    return -1;
  }

  function wordAppearsFuzzy(hay, token, lenient) {
    return findFuzzyTokenPosition(hay, token, 0, lenient) >= 0;
  }

  function countOrderedTokenHits(tokens, hay, lenient) {
    var pos = 0;
    var matched = 0;
    var ti;
    for (ti = 0; ti < tokens.length; ti++) {
      var idx = findFuzzyTokenPosition(hay, tokens[ti], pos, lenient);
      if (idx >= 0) {
        matched++;
        pos = idx + String(tokens[ti]).length;
      }
    }
    return matched;
  }

  function countBagTokenHits(tokens, hay, lenient) {
    var seen = {};
    var got = 0;
    var ti;
    for (ti = 0; ti < tokens.length; ti++) {
      var t = tokens[ti];
      if (seen[t]) continue;
      if (wordAppearsFuzzy(hay, t, lenient)) {
        seen[t] = 1;
        got++;
      }
    }
    return got;
  }

  /**
   * @param {string} phrase
   * @param {string} hay normalized transcript text
   * @param {boolean} lenient
   */
  function phraseHeardInHaystackWithMode(phrase, hay, lenient) {
    var normPhrase = normalizeSpeech(phrase);
    if (!normPhrase || !hay) return false;
    if (hay.indexOf(normPhrase) !== -1) return true;

    var tokens = phraseTokensForSpeech(phrase);
    if (!tokens.length) tokens = normalizeSpeech(phrase).split(" ").filter(Boolean);
    if (!tokens.length) return false;

    if (tokens.length === 1) {
      if (wordAppearsFuzzy(hay, tokens[0], lenient)) return true;
      if (lenient && roughSttShapeMatch(normPhrase, hay)) return true;
      return false;
    }

    if (lenient) {
      if (tokens.length <= 4) {
        var needShort = Math.max(1, Math.ceil(tokens.length * 0.65));
        if (
          countOrderedTokenHits(tokens, hay, true) >= needShort ||
          countBagTokenHits(tokens, hay, true) >= needShort
        ) {
          return true;
        }
        if (roughSttShapeMatch(normPhrase, hay)) return true;
        return false;
      }
      var needOrdL = Math.max(1, Math.ceil(tokens.length * 0.28));
      var needBagL = Math.max(2, Math.ceil(tokens.length * 0.42));
      if (countOrderedTokenHits(tokens, hay, true) >= needOrdL) return true;
      if (countBagTokenHits(tokens, hay, true) >= needBagL) return true;
      if (normPhrase.length >= 12) {
        var prefixLen = Math.min(
          normPhrase.length - 1,
          Math.max(5, Math.floor(normPhrase.length * 0.42))
        );
        var prefix = normPhrase.slice(0, prefixLen);
        if (
          hay.indexOf(prefix) !== -1 &&
          countBagTokenHits(tokens, hay, true) >= Math.ceil(tokens.length * 0.22)
        ) {
          return true;
        }
      }
      if (roughSttShapeMatch(normPhrase, hay)) return true;
      return false;
    }

    if (tokens.length <= 3) {
      return (
        countOrderedTokenHits(tokens, hay, false) >= tokens.length ||
        countBagTokenHits(tokens, hay, false) >= tokens.length
      );
    }

    var needOrd = Math.max(2, Math.ceil(tokens.length * 0.42));
    var needBag = Math.max(3, Math.ceil(tokens.length * 0.58));
    if (countOrderedTokenHits(tokens, hay, false) >= needOrd) return true;
    if (countBagTokenHits(tokens, hay, false) >= needBag) return true;

    if (normPhrase.length >= 14) {
      var prefixLen2 = Math.min(
        normPhrase.length - 1,
        Math.max(8, Math.floor(normPhrase.length * 0.55))
      );
      var prefix2 = normPhrase.slice(0, prefixLen2);
      if (
        hay.indexOf(prefix2) !== -1 &&
        countBagTokenHits(tokens, hay, false) >= Math.ceil(tokens.length * 0.35)
      ) {
        return true;
      }
    }

    return false;
  }

  function phraseHeardInHaystack(phrase, hay) {
    return phraseHeardInHaystackWithMode(phrase, hay, false);
  }

  /** Extra-tolerant matching for classroom bingo / accented speech */
  function phraseHeardInHaystackLenient(phrase, hay) {
    return phraseHeardInHaystackWithMode(phrase, hay, true);
  }

  /** Combine finalized + interim speech into one normalized search string */
  function buildHaystack(finalBuffer, interimLive) {
    return normalizeSpeech((finalBuffer || "") + " " + (interimLive || ""));
  }

  /**
   * Echo Minute — detect «skip / I don't know» in transcript (voice sprint).
   * @param {string} hay normalized or raw haystack (normalized internally)
   */
  function voiceBlitzSkipHeard(hay) {
    var n = normalizeSpeech(hay);
    if (n.length < 3) return false;
    var needles = [
      "i don't know",
      "i dont know",
      "i do not know",
      "don't know",
      "dont know",
      "dunno",
      "no idea",
      "skip it",
      "skip",
      "pass",
      "next please",
      "next card"
    ];
    var i;
    for (i = 0; i < needles.length; i++) {
      if (n.indexOf(needles[i]) !== -1) return true;
    }
    return false;
  }

  /**
   * Typed answer vs phrase — substring equality plus lenient token overlap.
   * @param {string} typed raw user input
   * @param {string} phrase expected phrase (answer)
   */
  function typedMatchesPhrase(typed, phrase) {
    var t = normalizeSpeech(typed);
    var p = normalizeSpeech(phrase);
    if (!t || !p) return false;
    if (t === p) return true;
    var shortOk = Math.min(t.length, p.length);
    if (shortOk >= 4 && (t.indexOf(p) !== -1 || p.indexOf(t) !== -1)) return true;
    if (phraseHeardInHaystackLenient(phrase, t)) return true;
    return roughSttShapeMatch(p, t);
  }

  /**
   * Voice bingo pool match — short cool-word phrases; full sentences optional fallback.
   * Prefer lenient match for ≤8 lexical tokens (classroom mic).
   */
  function phraseMatchesVoiceBingoPool(phrase, hay) {
    var normPhrase = normalizeSpeech(phrase);
    if (!normPhrase || !hay) return false;
    var tokens = phraseTokensForSpeech(phrase);
    if (!tokens.length) tokens = normPhrase.split(" ").filter(Boolean);
    if (tokens.length <= 8) {
      if (phraseHeardInHaystackLenient(phrase, hay)) return true;
    }
    return phraseMatchesVoiceBingo(phrase, hay);
  }

  W.PREP_RETELL_CHAIN_SPEECH = {
    normalizeSpeech: normalizeSpeech,
    phraseHeardInHaystack: phraseHeardInHaystack,
    phraseHeardInHaystackLenient: phraseHeardInHaystackLenient,
    phraseMatchesVoiceBingo: phraseMatchesVoiceBingo,
    phraseMatchesVoiceBingoPool: phraseMatchesVoiceBingoPool,
    typedMatchesPhrase: typedMatchesPhrase,
    buildHaystack: buildHaystack,
    voiceBlitzSkipHeard: voiceBlitzSkipHeard
  };
})(typeof window !== "undefined" ? window : globalThis);
