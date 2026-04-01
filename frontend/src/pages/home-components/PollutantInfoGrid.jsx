import { useEffect, useRef, useState } from "react";

const POLLUTANTS = [
  {
    name: "PM2.5",
    icon: "🌫️",
    meaning: "Fine inhalable particles that penetrate deep into the lungs.",
    source: "Vehicle exhaust, biomass burning, dust, and construction.",
    health: "Triggers asthma, reduces lung function, causes respiratory issues.",
    guidance: "Avoid outdoor exercise; wear mask; keep windows closed.",
  },
  {
    name: "PM10",
    icon: "💨",
    meaning: "Coarse dust particles.",
    source: "Road dust, construction.",
    health: "Breathing discomfort.",
    guidance: "Avoid dusty areas.",
  },
  {
    name: "NO₂",
    icon: "🏭",
    meaning: "Toxic gas from vehicles.",
    source: "Traffic, industries.",
    health: "Reduces lung function.",
    guidance: "Avoid traffic areas.",
  },
];

const AUTO_ROTATE_MS = 5000;

export default function PollutantInfoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % POLLUTANTS.length);
    }, AUTO_ROTATE_MS);
  };

  const stopTimer = () => clearInterval(intervalRef.current);

  useEffect(() => {
    if (!paused) startTimer();
    return stopTimer;
  }, [paused]);

  const next = () => setIndex((prev) => (prev + 1) % POLLUTANTS.length);
  const prev = () => setIndex((prev) => (prev === 0 ? POLLUTANTS.length - 1 : prev - 1));

  const p = POLLUTANTS[index];

  return (
    <section className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4" style={{ color: "#e2e8f0" }}>
        Air Pollutant Information
      </h2>

      <div
        className="p-6 rounded-xl transition-all duration-300"
        style={{ border: "1px solid rgba(51, 65, 85, 0.5)", background: "rgba(15, 23, 42, 0.7)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <h3 className="text-xl font-bold mb-2" style={{ color: "#e2e8f0" }}>
          {p.icon} {p.name}
        </h3>

        <div className="text-left space-y-1" style={{ color: "#94a3b8" }}>
          <p><strong style={{ color: "#cbd5e1" }}>Meaning:</strong> {p.meaning}</p>
          <p><strong style={{ color: "#cbd5e1" }}>Source:</strong> {p.source}</p>
          <p><strong style={{ color: "#cbd5e1" }}>Health:</strong> {p.health}</p>
          <p><strong style={{ color: "#cbd5e1" }}>Guidance:</strong> {p.guidance}</p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ background: "rgba(30, 41, 59, 0.6)", color: "#94a3b8", border: "1px solid rgba(51,65,85,0.5)" }}
          >
            Prev
          </button>
          <div className="flex gap-2 items-center">
            {POLLUTANTS.map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ background: i === index ? "#6366f1" : "rgba(51, 65, 85, 0.5)" }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ background: "rgba(30, 41, 59, 0.6)", color: "#94a3b8", border: "1px solid rgba(51,65,85,0.5)" }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}