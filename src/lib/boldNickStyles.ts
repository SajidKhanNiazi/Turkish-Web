import { transformTextWithStyle, UNICODE_FONT_STYLE_IDS } from "@/lib/textStyles";

export type BoldStyleType = "kalin" | "ozel" | "karisik";

export type BoldNickItem = {
  id: string;
  preview: string;
  score: number;
  type: BoldStyleType;
};

// --- Definitions ---
const VISUAL_GROUPS: Record<string, string> = {
  bold: "bold",
  sansBold: "bold",
  boldItalic: "bold",
  sansBoldItalic: "bold",
  gothicBold: "gothic",
  mono: "mono",
  double: "double",
  script: "script",
  bubble: "bubble",
  square: "square",
  wide: "wide",
  negativeSquared: "special",
  negativeCircled: "special",
};

const BOLD_FONT_IDS = ["sansBold", "gothicBold", "mono", "sansBoldItalic"];
const SPECIAL_FONT_IDS = ["script", "double", "bubble", "square", "wide", "smallCaps"];

// --- Decorative Templates ---
type Decoration = {
  pre: string;
  post: string;
  impact: number; // 0-10
};

const DECORATIONS_BOLD: Decoration[] = [
  { pre: "★ ", post: " ★", impact: 8 },
  { pre: "『", post: "』", impact: 9 },
  { pre: "✦ ", post: " ✦", impact: 8 },
  { pre: "【 ", post: " 】", impact: 7 },
  { pre: "✧ ", post: " ✧", impact: 7 },
  { pre: "×º°”˜", post: "˜”°º×", impact: 8 },
  { pre: "» ", post: " «", impact: 6 },
  { pre: "░▒▓ ", post: " ▓▒░", impact: 7 },
  { pre: "♕ ", post: " ♕", impact: 8 },
  { pre: "☾ ", post: " ☽", impact: 6 },
];

const DECORATIONS_SPECIAL: Decoration[] = [
  { pre: "꧁ ", post: " ꧂", impact: 10 },
  { pre: "༺ ", post: " ༻", impact: 9 },
  { pre: "乂", post: "乂", impact: 9 },
  { pre: "♛ ", post: " ♛", impact: 8 },
  { pre: "🦋 ", post: " 🦋", impact: 7 },
  { pre: "✨ ", post: " ✨", impact: 8 },
  { pre: "✿ ", post: " ✿", impact: 6 },
  { pre: "彡", post: "彡", impact: 7 },
  { pre: "╰‿╯", post: "", impact: 10 },
  { pre: "ツ ", post: "", impact: 8 },
];

/**
 * Massive Style Engine for Bold & Special Nicknames
 * Generates 400+ variations and scores them based on the ranking logic.
 */
export function generateBoldNickStyles(
  input: string,
  filter: "all" | BoldStyleType = "all"
): BoldNickItem[] {
  const raw = input.trim();
  if (!raw) return [];

  const seen = new Set<string>();
  const totalResults: BoldNickItem[] = [];

  // --- Step 1: Raw Base Fonts ---
  UNICODE_FONT_STYLE_IDS.forEach((sid) => {
    const styled = transformTextWithStyle(raw, sid);
    if (seen.has(styled)) return;
    seen.add(styled);

    const isBold = BOLD_FONT_IDS.includes(sid);
    const itemType: BoldStyleType = isBold ? "kalin" : "ozel";

    if (filter !== "all" && filter !== "karisik" && itemType !== filter) return;

    let score = isBold ? 15 : 5;
    if (sid === "sansBold" || sid === "mono") score = 20; 

    totalResults.push({
        id: `bn-${totalResults.length + 1}`,
        preview: styled,
        score,
        type: itemType
    });
  });

  // --- Step 2: Decorative Bold Variations ---
  DECORATIONS_BOLD.forEach((dec) => {
    // Only use top 3 bold fonts to avoid massive repetition
    const targetedBold = ["sansBold", "gothicBold", "mono"];
    targetedBold.forEach((sid) => {
      const styled = transformTextWithStyle(raw, sid);
      const preview = `${dec.pre}${styled}${dec.post}`;

      if (seen.has(preview)) return;
      seen.add(preview);

      const itemType: BoldStyleType = "kalin";
      if (filter !== "all" && filter !== "karisik" && itemType !== filter) return;

      totalResults.push({
        id: `bn-${totalResults.length + 1}`,
        preview,
        score: 12 + dec.impact,
        type: itemType
      });
    });
  });

  // --- Step 3: Special Decorative Styles ---
  DECORATIONS_SPECIAL.forEach((dec) => {
    const targetedSpecial = ["script", "double", "gothicBold"];
    targetedSpecial.forEach((sid) => {
      const styled = transformTextWithStyle(raw, sid);
      const preview = `${dec.pre}${styled}${dec.post}`;

      if (seen.has(preview)) return;
      seen.add(preview);

      const itemType: BoldStyleType = "ozel";
      if (filter !== "all" && filter !== "karisik" && itemType !== filter) return;

      totalResults.push({
        id: `bn-${totalResults.length + 1}`,
        preview,
        score: 8 + dec.impact,
        type: itemType
      });
    });
  });

  // --- Step 4: Karisik ---
  if (filter === "all" || filter === "karisik") {
      for (let i = 0; i < 100; i++) {
        const sid = ["sansBold", "script", "double"][i % 3];
        const dec1 = DECORATIONS_BOLD[i % DECORATIONS_BOLD.length];
        const styled = transformTextWithStyle(raw, sid);
        const preview = `${dec1.pre}${styled}`;

        if (seen.has(preview)) continue;
        seen.add(preview);

        totalResults.push({
            id: `bn-mix-${i}`,
            preview,
            score: 5,
            type: "karisik"
        });
      }
  }

  // --- Diversity Sorting ---
  totalResults.sort((a, b) => b.score - a.score);

  const filteredResults: BoldNickItem[] = [];
  const groupCount: Record<string, number> = {};

  for (const item of totalResults) {
    let group = "other";
    for (const [sid, g] of Object.entries(VISUAL_GROUPS)) {
        if (item.preview.includes(transformTextWithStyle(raw, sid))) {
            group = g;
            break;
        }
    }

    groupCount[group] = (groupCount[group] || 0) + 1;
    
    // In top 30, allow only 5 per group to force diversity
    if (filteredResults.length < 30) {
        if (groupCount[group] > 5) continue;
    } else if (groupCount[group] > 15) {
        continue;
    }

    filteredResults.push(item);
  }

  return filteredResults;
}
