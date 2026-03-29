import { KNOWLEDGE_RAW } from "@/data/chatbot-knowledge";

export type ChatQA = { t: string[]; a: string };

export function parseKnowledge(raw: string): ChatQA[] {
  return raw
    .trim()
    .split(/\n+/)
    .map((line) => {
      const pipe = line.indexOf("|");
      if (pipe === -1) return null;
      const t = line
        .slice(0, pipe)
        .split(",")
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);
      const a = line.slice(pipe + 1).trim();
      return t.length && a ? { t, a } : null;
    })
    .filter(Boolean) as ChatQA[];
}

export const CHATBOT_QA = parseKnowledge(KNOWLEDGE_RAW);

export function matchChatAnswer(msg: string, kb: ChatQA[] = CHATBOT_QA): string {
  const m = msg.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  let best: string | null = null;
  let bestScore = 0;
  kb.forEach((entry) => {
    entry.t.forEach((t) => {
      if (!t) return;
      if (m.indexOf(t) !== -1 && t.length > bestScore) {
        bestScore = t.length;
        best = entry.a;
      }
    });
  });
  return (
    best ||
    "I am not sure—try words like pricing, soft wash, driveway, roof, insurance, or call (555) 555-1234 to speak with our team."
  );
}
