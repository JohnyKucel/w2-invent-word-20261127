import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Phantomping — the buzz you swear you felt in your pocket from a phone that never vibrated.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
