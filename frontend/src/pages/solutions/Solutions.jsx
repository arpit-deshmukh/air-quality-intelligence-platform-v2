import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const solutions = [
  {
    title: "Beijing Air Quality Action Plan (2013–2017)",
    region: "China",
    desc:
      "Beijing implemented strict emission controls, relocated factories, restricted vehicles, and invested heavily in renewable energy. PM2.5 was reduced by nearly 35% within four years.",
    items: [
      "Coal-to-gas transition",
      "Odd-even vehicle rule",
      "Industrial relocation",
      "24x7 pollution monitoring grid",
    ],
    video: "/videos/solutions/beijing.mp4",
    link: "https://www.unep.org/resources/report/review-20-years-air-pollution-control-beijing",
  },
  {
    title: "London ULEZ (Ultra Low Emission Zone)",
    region: "UK",
    desc:
      "London introduced ULEZ in 2019, charging high-emission vehicles. NO₂ levels dropped by 44% in the first year.",
    items: [
      "ULEZ zone charging",
      "Diesel ban for older vehicles",
      "Mass EV infrastructure",
      "Strict vehicle emissions standards",
    ],
    video: "/videos/solutions/london.mp4",
    link: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone",
  },
  {
    title: "Delhi Graded Response Action Plan (GRAP)",
    region: "India",
    desc:
      "A tiered emergency response framework enforcing construction bans, traffic restrictions, and generator bans during pollution spikes.",
    items: [
      "Construction ban in severe AQI",
      "Odd-even emergency rule",
      "Dust control & sprinkling",
      "Industry fuel transition norms",
    ],
    video: "/videos/solutions/delhi.mp4",
    link: "https://cpcb.nic.in/graded-response-action-plan-for-delhi-ncr/",
  },
  {
    title: "Paris Car-Free Day & Cycling Push",
    region: "France",
    desc:
      "Paris expanded cycling infrastructure, banned diesel vehicles, and introduced car-free zones, resulting in sustained PM reduction.",
    items: [
      "Cycling network expansion",
      "Car-free Sundays",
      "Diesel ban",
      "Urban green zones",
    ],
    video: "/videos/solutions/paris.mp4",
    link: "https://www.paris.fr/pages/paris-respire-2122",
  },
];

export default function Solutions() {
  const [open, setOpen] = useState(0);

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 anim-fade">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold text-blue-900 mb-2">
          Air Quality Solutions & Global Models
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Case studies from global cities that successfully reduced air pollution
          and the strategies that made it possible.
        </p>
      </header>

      <div className="space-y-6">
        {solutions.map((s, idx) => {
          const isOpen = open === idx;

          return (
            <div
              key={idx}
              className={`
                rounded-2xl border
                transition-all duration-300
                ${isOpen ? "border-blue-300 shadow-lg" : "border-gray-200"}
              `}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {s.title}
                  </h2>
                  <p className="text-sm text-gray-500">{s.region}</p>
                </div>

                {isOpen ? (
                  <ChevronUp className="text-gray-600" size={22} />
                ) : (
                  <ChevronDown className="text-gray-600" size={22} />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 anim-slide-up">
                  <video
                    src={s.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-52 object-cover rounded-xl mb-4"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  <ul className="list-disc ml-6 space-y-1 text-gray-800 mb-4">
                    {s.items.map((i, k) => (
                      <li key={k}>{i}</li>
                    ))}
                  </ul>

                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    Read full policy
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
