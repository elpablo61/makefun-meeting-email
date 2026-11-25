import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At 11:03, Linda read aloud the 400-word email she'd forwarded at 11:02, then asked if anyone had questions about the email.";

mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
writeFileSync("/output/entry.txt", entry, "utf8");
