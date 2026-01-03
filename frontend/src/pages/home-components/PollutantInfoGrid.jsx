import { useEffect, useRef, useState } from "react";

const pollutants = [
  {
    name: "PM2.5",
    color: "bg-blue-500",
    meaning: "Fine inhalable particles that penetrate deep into the lungs.",
    source: "Vehicle exhaust, biomass burning, dust, and construction.",
    health: "Triggers asthma, reduces lung function, causes long-term respiratory issues.",
    guidance: "Avoid outdoor exercise; wear a mask; keep windows closed during rush hours.",
  },
  {
    name: "PM10",
    color: "bg-indigo-500",
    meaning: "Coarse dust particles that irritate the eyes, nose, and throat.",
    source: "Road dust, construction, soil, and industrial activity.",
    health: "Short-term breathing discomfort; worsens asthma.",
    guidance: "Avoid dusty roads; consider wearing a mask outdoors.",
  },
  {
    name: "NO₂",
    color: "bg-purple-500",
    meaning: "Toxic gas mainly produced from vehicles and industrial activity.",
    source: "Traffic congestion, diesel vehicles, power plants.",
    health: "Reduces lung function and worsens asthma.",
    guidance: "Avoid main roads during peak traffic hours.",
  },
  {
    name: "SO₂",
    color: "bg-rose-500",
    meaning: "Gas produced from burning coal and industrial activities.",
    source: "Thermal power plants, factories, and fuel combustion.",
    health: "Irritates eyes and throat; harmful for people with asthma.",
    guidance: "Asthma patients should stay indoors.",
  },
  {
    name: "CO",
    color: "bg-amber-500",
    meaning: "Colorless gas from incomplete combustion.",
    source: "Vehicles, stoves, heaters, industrial burners.",
    health: "Reduces oxygen supply; causes dizziness and headaches.",
    guidance: "Avoid enclosed parking areas; reduce exposure to traffic.",
  },
  {
    name: "O₃",
    color: "bg-teal-500",
    meaning: "Ground-level ozone formed by sunlight reacting with pollutants.",
    source: "Strong sunlight combined with traffic emissions.",
    health: "Causes coughing, throat irritation, and chest discomfort.",
    guidance: "Avoid outdoor activities during afternoon hours.",
  },
];

export default function PollutantInfoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % pollutants.length);
    }, 4500);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!paused) startTimer();
    return stopTimer;
  }, [paused]);

  const next = () => {
    setIndex((prev) => (prev + 1) % pollutants.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? pollutants.length - 1 : prev - 1));
  };

  const p = pollutants[index];

  return (
    <section className="mt-14 max-w-2xl mx-auto text-center anim-fade">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">
        Common Air Pollutants & Their Impact
      </h2>

      <div
        className="rounded-xl border border-gray-300 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`${p.color} text-white py-2 text-base font-semibold`}>
          {p.name}
        </div>

        <div className="p-4 space-y-1.5 text-sm text-gray-700 leading-relaxed">
          <p><b>Meaning:</b> {p.meaning}</p>
          <p><b>Sources:</b> {p.source}</p>
          <p><b>Health impact:</b> {p.health}</p>
          <p className="pt-1 text-xs font-medium text-blue-900">
            Guidance: {p.guidance}
          </p>
        </div>

        <div className="flex justify-between px-4 pb-2 text-xs">
          <button
            onClick={prev}
            className="text-gray-500 hover:text-blue-600 transition"
          >
            ← Previous
          </button>

          <button
            onClick={next}
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {pollutants.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
