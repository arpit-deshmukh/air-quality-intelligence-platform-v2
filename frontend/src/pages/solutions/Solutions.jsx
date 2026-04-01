import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const solutions = [
  {
    title: "Beijing Air Quality Action Plan (2013–2017)",
    region: "China",
    desc: "Beijing implemented strict emission controls, relocated factories, restricted vehicles, and invested heavily in renewable energy. PM2.5 was reduced by nearly 35% within four years.",
    items: ["Coal-to-gas transition", "Odd-even vehicle rule", "Industrial relocation", "24x7 pollution monitoring grid"],
    video: "/videos/solutions/beijing.mp4",
    link: "https://www.unep.org/resources/report/review-20-years-air-pollution-control-beijing",
  },
  {
    title: "London ULEZ (Ultra Low Emission Zone)",
    region: "UK",
    desc: "London introduced ULEZ in 2019, charging high-emission vehicles. NO₂ levels dropped by 44% in the first year.",
    items: ["ULEZ zone charging", "Diesel ban for older vehicles", "Mass EV infrastructure", "Strict vehicle emissions standards"],
    video: "/videos/solutions/london.mp4",
    link: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone",
  },
  {
    title: "Delhi Graded Response Action Plan (GRAP)",
    region: "India",
    desc: "A tiered emergency response framework enforcing construction bans, traffic restrictions, and generator bans during pollution spikes.",
    items: ["Construction ban in severe AQI", "Odd-even emergency rule", "Dust control & sprinkling", "Industry fuel transition norms"],
    video: "/videos/solutions/delhi.mp4",
    link: "https://cpcb.nic.in/graded-response-action-plan-for-delhi-ncr/",
  },
  {
    title: "Paris Car-Free Day & Cycling Push",
    region: "France",
    desc: "Paris expanded cycling infrastructure, banned diesel vehicles, and introduced car-free zones, resulting in sustained PM reduction.",
    items: ["Cycling network expansion", "Car-free Sundays", "Diesel ban", "Urban green zones"],
    video: "/videos/solutions/paris.mp4",
    link: "https://www.paris.fr/pages/paris-respire-2122",
  },
];

export default function Solutions() {
  const [open, setOpen] = useState(0);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 anim-fade">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>
          Air Quality Solutions & Global Models
        </h1>
        <p className="max-w-2xl text-lg" style={{ color: "#94a3b8" }}>
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
              className="rounded-2xl transition-all duration-300"
              style={{
                border: isOpen ? "1px solid rgba(99, 102, 241, 0.4)" : "1px solid rgba(51, 65, 85, 0.5)",
                background: "rgba(15, 23, 42, 0.7)",
                boxShadow: isOpen ? "0 8px 32px rgba(0, 0, 0, 0.3)" : "none",
              }}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div>
                  <h2 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>
                    {s.title}
                  </h2>
                  <p className="text-sm" style={{ color: "#64748b" }}>{s.region}</p>
                </div>
                {isOpen ? (
                  <ChevronUp size={22} style={{ color: "#94a3b8" }} />
                ) : (
                  <ChevronDown size={22} style={{ color: "#94a3b8" }} />
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
                  <p className="leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                    {s.desc}
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4" style={{ color: "#cbd5e1" }}>
                    {s.items.map((i, k) => (
                      <li key={k}>{i}</li>
                    ))}
                  </ul>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium hover:underline"
                    style={{ color: "#818cf8" }}
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
