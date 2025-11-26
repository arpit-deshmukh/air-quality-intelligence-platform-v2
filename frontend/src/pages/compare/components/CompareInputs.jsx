import { useState } from "react";
import { cities } from "../../../data/cities";
import { fetchLiveAQI } from "../../../api/aqi";

export default function CompareInputs({ onSelectA, onSelectB }) {
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  const loadA = async (name) => {
    const res = await fetchLiveAQI(name);
    onSelectA(res);
  };

  const loadB = async (name) => {
    const res = await fetchLiveAQI(name);
    onSelectB(res);
  };

  return (
    <div className="flex gap-6 mb-8">
      <select
        className="border p-2 rounded-lg"
        onChange={(e) => { setCity1(e.target.value); loadA(e.target.value); }}
      >
        <option>Select City A</option>
        {cities.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded-lg"
        onChange={(e) => { setCity2(e.target.value); loadB(e.target.value); }}
      >
        <option>Select City B</option>
        {cities.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
    </div>
  );
}
