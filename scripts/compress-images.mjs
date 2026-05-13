import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const CITIES = ["las-vegas", "dallas", "austin", "omaha", "denver"];
const TARGETS = ["hero.webp", "about-team.webp", "attorney-consultation.webp"];

async function compressImage(filePath) {
  const before = fs.statSync(filePath).size;
  const buf = fs.readFileSync(filePath);
  const compressed = await sharp(buf)
    .resize(1536, 1024, { fit: "cover", position: "center" })
    .webp({ quality: 82, effort: 4 })
    .toBuffer();
  fs.writeFileSync(filePath, compressed);
  const after = compressed.length;
  console.log(`  ${path.basename(filePath)}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB`);
}

for (const city of CITIES) {
  console.log(`\n${city}`);
  for (const img of TARGETS) {
    const p = path.join(ROOT, "apps", city, "public", "images", img);
    if (fs.existsSync(p)) {
      await compressImage(p);
    }
  }
}
console.log("\nDone.");
