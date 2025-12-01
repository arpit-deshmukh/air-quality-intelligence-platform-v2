import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import FurtherReadingSolutions from "./FurtherReadingSolutions";

const solutions = [
  {
    title: "Beijing Air Quality Action Plan (2013–2017)",
    region: "China",
    desc: "Beijing implemented strict emission controls, relocated factories, restricted vehicles, and massively invested in renewable energy. PM2.5 reduced by 35% in 4 years.",
    items: [
      "Coal-to-gas transition",
      "Odd-even vehicle rule",
      "Industrial relocation",
      "24x7 pollution monitoring grid",
    ],
    video:
      "/videos/solutions/beijing.mp4", 
    link: "https://www.unep.org/news-and-stories/story/how-beijing-grew-cleaner",
  },
  {
    title: "London ULEZ (Ultra Low Emission Zone)",
    region: "UK",
    desc: "London introduced ULEZ in 2019 where polluting vehicles pay a heavy fee. NO2 reduced by 44% in first year.",
    items: [
      "ULEZ zone charging",
      "Diesel ban for older vehicles",
      "Mass EV infrastructure",
      "Strict vehicle emissions standards",
    ],
    video:
      "/videos/solutions/london.mp4", 
    link: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone",
  },
  {
    title: "Delhi Graded Response Action Plan (GRAP)",
    region: "India",
    desc: "A tiered policy system that automatically enforces restrictions like construction bans, traffic control, and generators ban when pollution levels rise.",
    items: [
      "Construction ban in severe AQI",
      "Odd-even emergency rule",
      "Dust control & water sprinkling",
      "Industry fuel transition norms",
    ],
    video:
      "/videos/solutions/delhi.mp4",
    link: "https://cpcb.nic.in/grap/",
  },
  {
    title: "Paris Car-Free Day & Cycling Push",
    region: "France",
    desc: "Paris aggressively pushed cycling lanes, car-free zones, and banned diesel cars. PM2.5 reduced significantly.",
    items: [
      "City-wide cycling network",
      "Car-free Sundays",
      "Diesel ban",
      "Urban green zones expansion",
    ],
    video:
      "/videos/solutions/paris.mp4",
    link: "https://www.paris.fr/pages/paris-respire-247",
  },
];

const roadmap = [
  "Real-time AQI grid monitoring in all major cities",
  "100% transition to clean public transport (CNG, EV, hydrogen)",
  "Heavy industries relocation outside city boundaries",
  "Strict construction dust control laws",
  "Massive city plantation and green buffer zones",
  "ULEZ in all metro cities",
  "Incentives for rooftop solar in all households",
];

export default function Solutions() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Air Quality Solutions & Global Models</h1>
      <p className="text-gray-600 mb-10 text-lg">
        Learn how different cities cleaned their air and what we can adopt in India & globally.
      </p>

      {/* SOLUTIONS */}
      <div className="space-y-6">
        {solutions.map((s, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg border rounded-2xl p-6 transition-all hover:shadow-xl"
          >
            <div
              onClick={() => toggle(idx)}
              className="flex justify-between items-center cursor-pointer"
            >
              <div>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="text-gray-500">{s.region}</p>
              </div>

              {open === idx ? (
                <ChevronUp size={26} className="text-gray-600" />
              ) : (
                <ChevronDown size={26} className="text-gray-600" />
              )}
            </div>

            {/* COLLAPSE SECTION */}
            {open === idx && (
              <div className="mt-5 animate-fadeIn">
                {/* Video */}
                <video
                  src={s.video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-52 object-cover rounded-xl shadow mb-4"
                />

                <p className="text-gray-700">{s.desc}</p>

                <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-800">
                  {s.items.map((i, k) => (
                    <li key={k}>{i}</li>
                  ))}
                </ul>

                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:underline"
                >
                  Read more <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ROADMAP */}
      <section className="mt-16 bg-gray-100 p-8 rounded-2xl border shadow">
        <h2 className="text-2xl font-bold mb-6">Proposed Air Quality Roadmap</h2>

        <div className="relative border-l border-gray-400">
          {roadmap.map((step, i) => (
            <div key={i} className="ml-6 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full absolute -left-1.5 mt-1.5"></div>
              <p className="text-gray-700 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <FurtherReadingSolutions />
    </div>
  );
}
