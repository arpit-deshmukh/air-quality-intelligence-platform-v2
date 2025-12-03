import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

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
        video: "/videos/solutions/beijing.mp4",
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
        video: "/videos/solutions/london.mp4",
        link: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone",
    },
    {
        title: "Delhi Graded Response Action Plan (GRAP)",
        region: "India",
        desc: "Tiered policy system enforcing construction bans, traffic control, and generator ban when pollution spikes.",
        items: [
            "Construction ban in severe AQI",
            "Odd-even emergency rule",
            "Dust control & sprinkling",
            "Industry fuel transition norms",
        ],
        video: "/videos/solutions/delhi.mp4",
        link: "https://cpcb.nic.in/grap/",
    },
    {
        title: "Paris Car-Free Day & Cycling Push",
        region: "France",
        desc: "Paris pushed cycling lanes, car-free zones, and banned diesel cars. PM2.5 reduced significantly.",
        items: [
            "Cycling network expansion",
            "Car-free Sundays",
            "Diesel ban",
            "Urban green zones",
        ],
        video: "/videos/solutions/paris.mp4",
        link: "https://www.paris.fr/pages/paris-respire-247",
    },
];

export default function Solutions() {
    const [open, setOpen] = useState(0); // FIRST CARD open by default

    const toggle = (idx) => setOpen(open === idx ? null : idx);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl text-blue-900 font-bold mb-2">
                Air Quality Solutions & Global Models
            </h1>

            <p className="text-gray-600 mb-10 text-lg">
                Learn how different cities cleaned their air and what we can adopt globally.
            </p>

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

                        {open === idx && (
                            <div className="mt-5 animate-fadeIn">
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
        </div>
    );
}
