import { FiExternalLink } from "react-icons/fi";

export default function FurtherReading() {
  const resources = [
    { name: "WHO — Air Pollution and Health", url: "https://www.who.int/health-topics/air-pollution" },
    { name: "US EPA — Particulate Matter (PM) Pollution", url: "https://www.epa.gov/pm-pollution" },
    { name: "AQICN — Real-time Global AQ Maps", url: "https://aqicn.org/map/world/" },
    { name: "OpenAQ — Open Air Quality Data Platform", url: "https://openaq.org" },
  ];

  return (
    <section
      className="mt-16 rounded-2xl p-8 anim-slide-up"
      style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
    >
      <h2 className="text-2xl font-semibold mb-8" style={{ color: "#e2e8f0" }}>
        Further Reading & Resources
      </h2>
      <ul className="space-y-4">
        {resources.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg px-5 py-4 transition-all duration-200"
              style={{
                border: "1px solid rgba(51, 65, 85, 0.5)",
                color: "#e2e8f0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                e.currentTarget.style.background = "rgba(99, 102, 241, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span className="font-medium">{item.name}</span>
              <FiExternalLink
                className="transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#818cf8" }}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
