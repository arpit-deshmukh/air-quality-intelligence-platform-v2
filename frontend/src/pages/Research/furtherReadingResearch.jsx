import { FiExternalLink } from "react-icons/fi";

export default function FurtherReading() {
const resources = [
  {
    name: "WHO — Air Pollution and Health",
    url: "https://www.who.int/health-topics/air-pollution",
  },
  {
    name: "US EPA — Particulate Matter (PM) Pollution",
    url: "https://www.epa.gov/pm-pollution",
  },
  {
    name: "AQICN — Real-time Global AQ Maps",
    url: "https://aqicn.org/map/world/",
  },
  {
    name: "OpenAQ — Open Air Quality Data Platform",
    url: "https://openaq.org",
  },
];


  return (
    <section className="mt-12 card fade-in">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">
        Further Reading & Resources
      </h2>

      <div className="relative ml-3">
        <div className="absolute left-3 top-0 h-full w-0.5 bg-blue-200"></div>

        <ul className="space-y-6 pl-8">
          {resources.map((item, i) => (
            <li
              key={i}
              className="relative bg-white shadow-sm border rounded-lg p-4 hover:shadow-md transition"
            >
              <div className="absolute -left-6 top-4 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-gray-800 font-medium"
              >
                {item.name}
                <FiExternalLink className="text-blue-600" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
