import { transformTextWithStyle, UNICODE_FONT_STYLE_IDS } from "@/lib/textStyles";

export type CoolStyleType = "gamer" | "social" | "minimal";

export type CoolNickItem = {
  id: string;
  preview: string;
  score: number;
  type: CoolStyleType;
};

// --- Scoring Constants ---
const SYMBOLS_GAMER = ["乂", "⚡", "『", "』", "☠", "×͜×", "々", "〆", "༒", "☣", "☢", "⚔️", "⛓️", "⛩️", "☯️", "☾", "☼", "☀", "☁", "☁️"];
const SYMBOLS_SOCIAL = ["✨", "✨", "♡", "❤", "💕", "🦋", "🌸", "⭐", "💎", "👑", "🌙", "☁️", "✿", "❀", "✦", "✧", "⊹", "﹟"];
const SYMBOLS_MINIMAL = ["•", "·", "‧", "･", " ", "ツ", " 么", "丨", "─", "─", "▪", "▫"];

const VISUAL_GROUPS: Record<string, string> = {
  bold: "bold",
  sansBold: "bold",
  boldItalic: "bold",
  sansBoldItalic: "bold",
  script: "script",
  scriptLight: "script",
  gothic: "gothic",
  gothicBold: "gothic",
  double: "double",
  bubble: "bubble",
  square: "square",
  wide: "wide",
  mono: "mono",
  smallCaps: "special",
  negativeSquared: "special",
  negativeCircled: "special",
};

const GAMER_FONT_STYLE_IDS = ["sansBold", "gothicBold", "mono", "sansBoldItalic"];
const SOCIAL_FONT_STYLE_IDS = ["script", "double", "bubble", "square", "wide"];
const MINIMAL_FONT_STYLE_IDS = ["sansBold", "italic", "mono"];

// --- Generators ---

type Template = {
  pre: string;
  post: string;
  type: CoolStyleType;
  impactWeight: number;
};

const TEMPLATES: Template[] = [
  // Gamer - High Impact
  { pre: "乂", post: "乂", type: "gamer", impactWeight: 10 },
  { pre: "⚡", post: "⚡", type: "gamer", impactWeight: 9 },
  { pre: "『", post: "』", type: "gamer", impactWeight: 8 },
  { pre: "☠", post: "☠", type: "gamer", impactWeight: 8 },
  { pre: "×͜×", post: "", type: "gamer", impactWeight: 9 },
  { pre: "༒ ", post: " ༒", type: "gamer", impactWeight: 10 },
  { pre: "〆", post: "〆", type: "gamer", impactWeight: 7 },
  { pre: "々", post: "々", type: "gamer", impactWeight: 7 },
  { pre: "☯", post: "☯", type: "gamer", impactWeight: 6 },
  { pre: "☽", post: "☾", type: "gamer", impactWeight: 6 },
  { pre: "☣ ", post: " ☣", type: "gamer", impactWeight: 8 },
  { pre: "⛩️", post: "⛩️", type: "gamer", impactWeight: 7 },
  { pre: "xX_", post: "_Xx", type: "gamer", impactWeight: 5 },
  { pre: "⎝", post: "⎠", type: "gamer", impactWeight: 6 },

  // Social - Trending
  { pre: "✨ ", post: " ✨", type: "social", impactWeight: 9 },
  { pre: "🦋", post: "🦋", type: "social", impactWeight: 8 },
  { pre: "♡", post: "♡", type: "social", impactWeight: 7 },
  { pre: "🌸 ", post: " 🌸", type: "social", impactWeight: 7 },
  { pre: "🌙 ", post: " 🌙", type: "social", impactWeight: 6 },
  { pre: "✦ ", post: " ✦", type: "social", impactWeight: 6 },
  { pre: "👑 ", post: " 👑", type: "social", impactWeight: 8 },
  { pre: "✿ ", post: " ✿", type: "social", impactWeight: 5 },
  { pre: "⊹ ", post: " ⊹", type: "social", impactWeight: 5 },

  // Minimal - Clean
  { pre: "• ", post: " •", type: "minimal", impactWeight: 6 },
  { pre: "· ", post: " ·", type: "minimal", impactWeight: 5 },
  { pre: "", post: " ツ", type: "minimal", impactWeight: 7 },
  { pre: "", post: " 么", type: "minimal", impactWeight: 7 },
  { pre: "▪", post: "▪", type: "minimal", impactWeight: 4 },
  { pre: "─", post: "─", type: "minimal", impactWeight: 4 },
  { pre: "丨", post: "丨", type: "minimal", impactWeight: 4 },
];

/**
 * Smart Ranking Engine for Cool Nicknames
 */
export function generateCoolNickStyles(
  input: string,
  filter: "all" | CoolStyleType = "all"
): CoolNickItem[] {
  const raw = input.trim();
  if (!raw) return [];

  const seen = new Set<string>();
  const totalResults: CoolNickItem[] = [];

  const getStyleScore = (styleId: string, type: CoolStyleType): number => {
    let bonus = 0;
    if (type === "gamer" && GAMER_FONT_STYLE_IDS.includes(styleId)) bonus = 10;
    if (type === "social" && SOCIAL_FONT_STYLE_IDS.includes(styleId)) bonus = 10;
    if (type === "minimal" && MINIMAL_FONT_STYLE_IDS.includes(styleId)) bonus = 10;

    // Manual Boost for "Cool" Fonts
    if (styleId === "gothicBold") bonus += 5;
    if (styleId === "script") bonus += 5;
    if (styleId === "double") bonus += 3;

    return bonus;
  };

  // 1. Generate based on templates
  for (const template of TEMPLATES) {
    if (filter !== "all" && template.type !== filter) continue;

    // Use a subset of best-performing fonts for templates to avoid repetition
    const targetedFonts = template.type === "gamer" 
      ? ["gothicBold", "sansBold", "mono"] 
      : template.type === "social" 
      ? ["script", "double", "bubble"] 
      : ["sansBold", "mono"];

    for (const sid of targetedFonts) {
      const styled = transformTextWithStyle(raw, sid);
      const preview = `${template.pre}${styled}${template.post}`;

      if (seen.has(preview)) continue;
      seen.add(preview);

      let score = template.impactWeight + getStyleScore(sid, template.type);
      if (preview.length > 25) score -= 5;

      totalResults.push({
        id: `cool-${totalResults.length + 1}`,
        preview,
        score,
        type: template.type,
      });
    }
  }

  // 2. Generate raw fonts 
  const fallbackType: CoolStyleType = filter === "all" ? "minimal" : filter;
  UNICODE_FONT_STYLE_IDS.forEach((sid) => {
    const styled = transformTextWithStyle(raw, sid);
    if (!seen.has(styled)) {
        seen.add(styled);
        totalResults.push({
            id: `cool-${totalResults.length + 1}`,
            preview: styled,
            score: (SOCIAL_FONT_STYLE_IDS.includes(sid) ? 6 : 2),
            type: fallbackType,
        });
    }
  });

  // 3. Smart Diversity Filtering
  totalResults.sort((a, b) => b.score - a.score);

  const filteredResults: CoolNickItem[] = [];
  const groupCount: Record<string, number> = {};

  for (const item of totalResults) {
    // Determine visual group
    let group = "other";
    for (const [sid, g] of Object.entries(VISUAL_GROUPS)) {
        if (item.preview.includes(transformTextWithStyle(raw, sid))) {
            group = g;
            break;
        }
    }

    // Limit each family to ensure diversity in top results
    groupCount[group] = (groupCount[group] || 0) + 1;
    
    // In top 30, allow only 4 per group. After that, allow more.
    if (filteredResults.length < 30) {
        if (groupCount[group] > 4) continue;
    } else if (groupCount[group] > 12) {
        // Hard limit for volume
        continue;
    }

    filteredResults.push(item);
  }

  return filteredResults;
}
