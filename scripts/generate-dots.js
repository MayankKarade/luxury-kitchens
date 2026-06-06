const fs = require("fs");
const path = require("path");
const { geoContains, geoMercator } = require("d3-geo");
const { feature } = require("topojson-client");

const worldData = require("world-atlas/countries-50m.json");

const width = 1000;
const height = 295;

// 👇 Change these values to match the exact area shown in your image
const bounds = {
  minLon: -130, // western edge (Alaska / western Canada)
  maxLon: 60, // eastern edge (middle of Russia / Kazakhstan)
  minLat: 0, // southern edge (equator – Ghana is at 7°N, so this shows a bit south of Ghana)
  maxLat: 70, // northern edge (northern Canada / Arctic)
};

// Create a polygon from the bounds
const bboxPolygon = {
  type: "Polygon",
  coordinates: [
    [
      [bounds.minLon, bounds.minLat],
      [bounds.maxLon, bounds.minLat],
      [bounds.maxLon, bounds.maxLat],
      [bounds.minLon, bounds.maxLat],
      [bounds.minLon, bounds.minLat],
    ],
  ],
};

// Projection automatically fits the bounds with 5% margin
const projection = geoMercator().fitExtent(
  [
    [width * 0.05, height * 0.05],
    [width * 0.95, height * 0.95],
  ],
  bboxPolygon,
);

const land = feature(worldData, worldData.objects.land);
const step = 1.2; // density of dots (smaller = denser)
const points = [];

// Generate dots only within the bounded area (faster and cleaner)
for (let lon = bounds.minLon; lon <= bounds.maxLon; lon += step) {
  for (let lat = bounds.minLat; lat <= bounds.maxLat; lat += step) {
    if (geoContains(land, [lon, lat])) {
      const [x, y] = projection([lon, lat]);
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        points.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
      }
    }
  }
}

const pins = {
  Canada: [-106.3468, 56.1304],
  USA: [-95.7129, 37.0902],
  UK: [-3.436, 55.3781],
  Europe: [15.2551, 54.526],
  Ghana: [-1.0232, 7.9465],
};

const pinPositions = {};
for (const [name, [lon, lat]] of Object.entries(pins)) {
  const [x, y] = projection([lon, lat]);
  pinPositions[name] = {
    left: `${(x / width) * 100}%`,
    top: `${(y / height) * 100}%`,
  };
}

const dataDir = path.join(__dirname, "../src/data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "landDots.js"),
  `// Map exactly matching reference image\nexport const landDots = ${JSON.stringify(points)};`,
);

console.log(`✅ Generated ${points.length} dots for custom region`);
console.log("\n📌 Copy this exact 'locations' array into your component:\n");
console.log("const locations = [");
for (const [name, pos] of Object.entries(pinPositions)) {
  console.log(`  { name: "${name}", top: "${pos.top}", left: "${pos.left}" },`);
}
console.log("];");
console.log(
  "\n⚠️ Ensure each pin div has style={{ transform: 'translate(-50%, -100%)' }}",
);
