const roadmap = [
  "Real-time AQI grid monitoring in all major cities",
  "100% transition to clean public transport (CNG, EV, hydrogen)",
  "Heavy industries relocation outside city boundaries",
  "Strict construction dust control laws",
  "Massive city plantation and green buffer zones",
  "ULEZ implementation in all metro cities",
  "Incentives for rooftop solar in all households",
];

export default function Roadmap() {
  return (
    <section className="mt-20 anim-slide-up">
      <h2 className="text-2xl font-semibold mb-10" style={{ color: "#e2e8f0" }}>
        Proposed Air Quality Roadmap
      </h2>
      <div className="relative pl-8 space-y-8" style={{ borderLeft: "1px solid rgba(99, 102, 241, 0.3)" }}>
        {roadmap.map((step, i) => (
          <div key={i} className="relative pl-4">
            <span
              className="absolute -left-[14px] top-1.5 w-3 h-3 rounded-full"
              style={{ background: "#6366f1" }}
            />
            <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
