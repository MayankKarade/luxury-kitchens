"use client";

import { useId } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";

const width = 1000;
const height = 520;
const countries = feature(world, world.objects.countries).features.filter(
  (country) => String(country.id) !== "010",
);
const projection = geoNaturalEarth1().fitExtent(
  [[12, 12], [width - 12, height - 12]],
  { type: "FeatureCollection", features: countries },
);
const path = geoPath(projection);
const shapes = countries.map((country) => ({
  id: String(country.id ?? country.properties.name),
  path: path(country),
  selected: ["840", "288"].includes(String(country.id)),
}));
const markers = [
  { label: "USA", coordinates: [-95.7129, 37.0902] },
  // Adenta, Accra: the office area beside Adenta Police Station.
  { label: "Ghana", coordinates: [-0.1706, 5.7067] },
].map((marker) => ({ ...marker, point: projection(marker.coordinates) }));
const [usaPoint, ghanaPoint] = markers.map((marker) => marker.point);

export default function ServiceLocationsMap() {
  const patternId = useId();

  return (
    <div className="relative aspect-[1000/520] w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="World map highlighting Cali Wood service locations in the USA and Ghana"
        className="h-full w-full"
      >
        <defs>
          <pattern id={patternId} width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="1.25" fill="#b6b6b6" />
          </pattern>
        </defs>
        {shapes.map((country) => (
          <g key={country.id}>
            <path d={country.path} fill={`url(#${patternId})`} />
            {country.selected && (
              <path d={country.path} fill="#9a0101" fillOpacity="0.12" stroke="#9a0101" strokeOpacity="0.5" strokeWidth="0.8" />
            )}
          </g>
        ))}
        <path
          d={`M${usaPoint} Q${(usaPoint[0] + ghanaPoint[0]) / 2},${Math.min(usaPoint[1], ghanaPoint[1]) - 55} ${ghanaPoint}`}
          fill="none"
          stroke="#9a0101"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="5 6"
        />
      </svg>
      {markers.map(({ label, point: [x, y] }) => (
        <div
          key={label}
          className="absolute z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x / width * 100}%`, top: `${y / height * 100}%` }}
        >
          <span aria-hidden="true" className="block h-3 w-3 rounded-full border-2 border-white bg-brand-gold shadow-[0_0_0_3px_rgba(154,1,1,0.15)]" />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-100 bg-white px-3 py-1.5 text-xs font-bold text-brand-dark shadow-sm">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
