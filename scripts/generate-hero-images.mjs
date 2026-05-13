import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const API_KEY = process.env.OPENAI_API_KEY;

const CITIES = [
  {
    city: "las-vegas",
    label: "Las Vegas, Nevada",
    context: "modern high-rise law office with Las Vegas Strip views in the background through floor-to-ceiling windows",
  },
  {
    city: "dallas",
    label: "Dallas, Texas",
    context: "modern Texas law office with Dallas skyline visible through large windows",
  },
  {
    city: "austin",
    label: "Austin, Texas",
    context: "contemporary Austin law firm office with warm Texas sunlight",
  },
  {
    city: "omaha",
    label: "Omaha, Nebraska",
    context: "professional Midwest law office in Omaha with a welcoming atmosphere",
  },
  {
    city: "denver",
    label: "Denver, Colorado",
    context: "upscale Denver law office with Rocky Mountain views through large windows",
  },
];

// Images to generate per city: name → prompt
function getImages(cityLabel, context) {
  return [
    {
      name: "hero.webp",
      prompt: `Professional personal injury legal team in ${cityLabel}. A diverse group of 3-4 confident attorneys in sharp business attire standing together in a ${context}. Warm professional lighting, bookshelves with legal volumes in the background, American flag. High-end law firm photography, photorealistic, 4K quality. No text, no logos.`,
    },
    {
      name: "about-team.webp",
      prompt: `Personal injury law firm team photo in ${cityLabel}. 4-5 professional attorneys seated and standing around a conference table in a ${context}. Diverse team, business professional attire, engaged and approachable expressions. Premium law firm interior design, photorealistic.`,
    },
    {
      name: "attorney-consultation.webp",
      prompt: `Personal injury attorney consulting with a client in a ${context} in ${cityLabel}. Professional lawyer in suit leaning forward attentively across a desk, client across from them with documents. Warm empathetic atmosphere, photorealistic.`,
    },
  ];
}

async function generateImage(prompt, outputPath) {
  console.log(`  Generating: ${path.basename(outputPath)}...`);

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1536x1024",
      quality: "high",
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data in response: " + JSON.stringify(data).slice(0, 200));

  const buf = Buffer.from(b64, "base64");
  fs.writeFileSync(outputPath, buf);
  console.log(`  ✓ Saved ${path.basename(outputPath)} (${Math.round(buf.length / 1024)}KB)`);
  return true;
}

async function main() {
  const results = { success: [], failed: [] };

  for (const city of CITIES) {
    console.log(`\n=== ${city.label} ===`);
    const imagesDir = path.join(ROOT, "apps", city.city, "public", "images");

    const images = getImages(city.label, city.context);

    for (const img of images) {
      const outPath = path.join(imagesDir, img.name);
      try {
        await generateImage(img.prompt, outPath);
        results.success.push(`${city.city}/${img.name}`);
        // Small delay to avoid rate limiting
        await new Promise((r) => setTimeout(r, 2000));
      } catch (err) {
        console.error(`  ✗ Failed ${img.name}: ${err.message}`);
        results.failed.push({ file: `${city.city}/${img.name}`, error: err.message });
      }
    }
  }

  fs.writeFileSync(
    path.join(ROOT, "image-generation-results-v2.json"),
    JSON.stringify(results, null, 2)
  );

  console.log(`\n✓ Done: ${results.success.length} succeeded, ${results.failed.length} failed`);
  if (results.failed.length > 0) {
    console.log("Failed:", results.failed.map((f) => f.file).join(", "));
  }
}

main().catch(console.error);
