export type ScriptStyle = {
  id: string;
  label: string;
  platforms: {
    pubg: "yes" | "no" | "partial";
    instagram: boolean;
    whatsapp: boolean;
    discord: boolean;
  };
};

export const SCRIPT_STYLES: ScriptStyle[] = [
  { id: "script", label: "El Yazısı", platforms: { pubg: "yes", instagram: true, whatsapp: true, discord: true } },
  { id: "bold-script", label: "El Yazısı Kalın", platforms: { pubg: "yes", instagram: true, whatsapp: true, discord: true } },
  { id: "kursif", label: "Kursif", platforms: { pubg: "partial", instagram: true, whatsapp: true, discord: true } },
  { id: "fraktur", label: "İnce El Yazısı", platforms: { pubg: "no", instagram: true, whatsapp: true, discord: true } },
  { id: "bold-fraktur", label: "Gotik El Yazısı", platforms: { pubg: "no", instagram: true, whatsapp: true, discord: true } },
  { id: "script-serif", label: "El Yazısı + Kalın Serif", platforms: { pubg: "yes", instagram: true, whatsapp: true, discord: true } },
  { id: "underline-script", label: "Altı Çizili El Yazısı", platforms: { pubg: "no", instagram: true, whatsapp: false, discord: true } },
  { id: "heart-script", label: "Kalp El Yazısı", platforms: { pubg: "yes", instagram: true, whatsapp: true, discord: true } },
];

const baseLatin = "abcdefghijklmnopqrstuvwxyz";
const baseLatinUpper = baseLatin.toUpperCase();

const scriptLower = "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏";
const scriptUpper = "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵";

const boldScriptLower = "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃";
const boldScriptUpper = "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩";

const boldItalicLower = "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻";
const boldItalicUpper = "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡";

const frakturLower = "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷";
const frakturUpper = "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ";

const boldFrakturLower = "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟";
const boldFrakturUpper = "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅";

const boldUpper = "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙";
const boldLower = "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳";

const buildMap = (source: string, target: string): Record<string, string> => {
  const map: Record<string, string> = {};
  const sourceChars = Array.from(source);
  const targetChars = Array.from(target);
  for (let i = 0; i < sourceChars.length; i++) {
    map[sourceChars[i]] = targetChars[i];
  }
  return map;
};

const scriptMap = { ...buildMap(baseLatin, scriptLower), ...buildMap(baseLatinUpper, scriptUpper) };
const boldScriptMap = { ...buildMap(baseLatin, boldScriptLower), ...buildMap(baseLatinUpper, boldScriptUpper) };
const boldItalicMap = { ...buildMap(baseLatin, boldItalicLower), ...buildMap(baseLatinUpper, boldItalicUpper) };
const frakturMap = { ...buildMap(baseLatin, frakturLower), ...buildMap(baseLatinUpper, frakturUpper) };
const boldFrakturMap = { ...buildMap(baseLatin, boldFrakturLower), ...buildMap(baseLatinUpper, boldFrakturUpper) };
const boldSerifMap = { ...buildMap(baseLatin, boldLower), ...buildMap(baseLatinUpper, boldUpper) };

// Turkish Diacritics script-specific overrides
const trScriptOverrides: Record<string, string> = {
  "ğ": "𝓰", // manually mapped as requested
  "ş": "𝓼" + "\u0327",
  "ı": "𝓲",
  "ç": "𝓬" + "\u0327",
  "ö": "𝓸" + "\u0308",
  "ü": "𝓾" + "\u0308",
  "İ": "𝓘"
};

export const transformScript = (input: string, styleId: string): string => {
  if (!input) return "";

  let result = "";
  const chars = Array.from(input);

  for (const char of chars) {
    let transformed = char;

    switch (styleId) {
      case "script":
        transformed = trScriptOverrides[char] || scriptMap[char] || char;
        break;
      case "bold-script":
        transformed = trScriptOverrides[char] || boldScriptMap[char] || char;
        break;
      case "kursif":
        transformed = boldItalicMap[char] || char;
        break;
      case "fraktur":
        transformed = frakturMap[char] || char;
        break;
      case "bold-fraktur":
        transformed = boldFrakturMap[char] || char;
        break;
      case "script-serif":
        // Mix of bold serif for vowels, script for others (example interpretation)
        const vowels = "aeıioöuüAEIİOÖUÜ";
        if (vowels.includes(char)) {
          transformed = boldSerifMap[char] || char;
        } else {
          transformed = trScriptOverrides[char] || scriptMap[char] || char;
        }
        break;
      case "underline-script":
        transformed = (trScriptOverrides[char] || scriptMap[char] || char) + "\u0332";
        break;
      case "heart-script":
        transformed = trScriptOverrides[char] || scriptMap[char] || char;
        break;
    }
    result += transformed;
  }

  if (styleId === "heart-script") {
    return `♡ ${result} ♡`;
  }

  return result;
};

export const getHeartCombos = (input: string): string[] => {
  if (!input) return [];
  const s = transformScript(input, "bold-script");
  return [
    `♡ ${s} ♡`,
    `❤ ${s} ❤`,
    `${s} → ♡${s}♡`,
    `꧁♡ ${s} ♡꧂`,
    `༺♡ ${s} ♡༻`,
    `✿ ${s} ✿`
  ];
};
