const solutions = [
  {
    title: "Beijing Air Quality Action Plan (2013–2017)",
    region: "China",
    desc: "Beijing implemented strict emission controls, relocated factories, restricted vehicles, and massively invested in renewable energy. PM2.5 reduced by 35% in 4 years.",
    items: [
      "Coal-to-gas transition",
      "Odd-even vehicle rule",
      "Industrial relocation",
      "24x7 pollution monitoring grid"
    ],
    link: "https://www.unep.org/news-and-stories/story/how-beijing-grew-cleaner"
  },
  {
    title: "London ULEZ (Ultra Low Emission Zone)",
    region: "UK",
    desc: "London introduced ULEZ in 2019 where polluting vehicles pay a heavy fee. NO2 reduced by 44% in first year.",
    items: [
      "ULEZ zone charging",
      "Diesel ban for older vehicles",
      "Mass EV infrastructure",
      "Strict vehicle emissions standards"
    ],
    link: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone"
  },
  {
    title: "Delhi Graded Response Action Plan (GRAP)",
    region: "India",
    desc: "A tiered policy system that automatically enforces restrictions like construction bans, traffic control, and generators ban when pollution levels rise.",
    items: [
      "Construction ban in severe AQI",
      "Odd-even emergency rule",
      "Dust control & water sprinkling",
      "Industry fuel transition norms"
    ],
    link: "https://cpcb.nic.in/grap/"
  },
  {
    title: "Paris Car-Free Day & Cycling Push",
    region: "France",
    desc: "Paris aggressively pushed cycling lanes, car-free zones, and banned diesel cars. PM2.5 reduced significantly.",
    items: [
      "City-wide cycling network",
      "Car-free Sundays",
      "Diesel ban",
      "Urban green zones expansion"
    ],
    link: "https://www.paris.fr/pages/paris-respire-247"
  }
];

const roadmap = [
  "Phase 1: Real-time AQI grid monitoring in all major cities",
  "Phase 2: 100% transition to clean public transport (CNG, EV, hydrogen)",
  "Phase 3: Heavy industries relocation outside city boundaries",
  "Phase 4: Strict construction dust control laws",
  "Phase 5: Massive city plantation and green buffer zones",
  "Phase 6: ULEZ in all metro cities",
  "Phase 7: Incentives for rooftop solar in all households"
];

export default function Solutions() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Air Quality Solutions & Global Models</h1>
      <p className="text-gray-600 mb-8 text-lg">Learn how different cities cleaned their air and what we can adopt in India & globally.</p>

      {/* Solutions Cards */}
      <div className="space-y-6">
        {solutions.map((s, idx) => (
          <div key={idx} className="bg-white shadow-md p-6 rounded-xl border">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <span className="text-sm text-gray-500">{s.region}</span>
            </div>

            <p className="text-gray-700 mt-3">{s.desc}</p>

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              {s.items.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>

            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      {/* Roadmap */}
      <section className="mt-12 p-6 bg-gray-50 rounded-xl border">
        <h2 className="text-2xl font-semibold mb-4">Proposed Air Quality Improvement Roadmap</h2>
        <ul className="list-decimal ml-6 text-gray-700 space-y-2">
          {roadmap.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Further Reading */}
      <section className="mt-10 p-5 bg-white rounded-xl border shadow">
        <h2 className="text-xl font-semibold mb-3">Further Reading</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><a className="text-blue-600 hover:underline" href="https://www.unep.org" target="_blank">UNEP: Global Pollution Reports</a></li>
          <li><a className="text-blue-600 hover:underline" href="https://www.ipcc.ch" target="_blank">IPCC Climate & Air Quality Findings</a></li>
          <li><a className="text-blue-600 hover:underline" href="https://cpcb.nic.in" target="_blank">Central Pollution Control Board (India)</a></li>
        </ul>
      </section>
    </div>
  );
}
