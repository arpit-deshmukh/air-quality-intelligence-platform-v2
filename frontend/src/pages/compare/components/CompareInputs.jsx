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
        className="p-2 rounded-lg transition-all duration-200"
        style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
        onChange={(e) => { setCity1(e.target.value); loadA(e.target.value); }}
      >
        <option>Select City A</option>
        {cities.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      <select
        className="p-2 rounded-lg transition-all duration-200"
        style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
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
