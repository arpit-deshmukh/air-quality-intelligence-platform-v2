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
    <section className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 anim-slide-up">

      <h2 className="text-2xl font-semibold text-blue-900 mb-8">
        Further Reading & Resources
      </h2>

      <ul className="space-y-4">
        {resources.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between
                rounded-lg border border-gray-200
                px-5 py-4 text-gray-800
                transition-all duration-200
                hover:border-blue-300 hover:bg-blue-50
              "
            >
              <span className="font-medium">
                {item.name}
              </span>

              <FiExternalLink
                className="
                  text-blue-600 transition-transform duration-200
                  group-hover:translate-x-1
                "
              />
            </a>
          </li>
        ))}
      </ul>

    </section>
  );
}
