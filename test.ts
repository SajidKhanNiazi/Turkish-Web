import * as fs from "fs";

try {
  const content = fs.readFileSync("./src/lib/textStyles.ts", "utf-8");
  const lines = content.split("\n");
  for (const line of lines) {
    if (line.includes("const ") && line.includes("=") && line.includes("\"")) {
      const match = line.match(/const\s+(\w+)\s*=\s*"([^"]+)"/);
      if (match) {
        const name = match[1];
        const chars = Array.from(match[2]);
        if (chars.length !== 26) {
          console.log(`ERROR: ${name} length is ${chars.length}`);
        }
      }
    }
  }
} catch (e) {
  console.error(e);
}
