import { useState } from "react";
import { cities } from "../../../data/cities";

export default function CitySelect() {
  const [cityA, setCityA] = useState("Delhi");
  const [cityB, setCityB] = useState("Mumbai");

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <select
        value={cityA}
        onChange={(e) => setCityA(e.target.value)}
        className="border p-3 rounded-lg"
      >
        {cities.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      <select
        value={cityB}
        onChange={(e) => setCityB(e.target.value)}
        className="border p-3 rounded-lg"
      >
        {cities.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
    </div>
  );
}
