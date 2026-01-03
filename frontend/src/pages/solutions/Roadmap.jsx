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
      <h2 className="text-2xl font-semibold text-blue-900 mb-10">
        Proposed Air Quality Roadmap
      </h2>

      <div className="relative border-l border-gray-300 pl-8 space-y-8">
        {roadmap.map((step, i) => (
          <div key={i} className="relative pl-4">
            <span className="absolute -left-[14px] top-1.5 w-3 h-3 rounded-full bg-blue-600" />
            <p className="text-gray-700 text-lg leading-relaxed">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
