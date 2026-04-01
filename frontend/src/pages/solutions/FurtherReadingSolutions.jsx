import { FiExternalLink } from "react-icons/fi";

export default function FurtherReadingSolutions() {
  const resources = [
    { name: "UNEP — Global Pollution Reports", url: "https://www.unep.org" },
    { name: "IPCC — Climate & Air Quality Findings", url: "https://www.ipcc.ch" },
    { name: "Central Pollution Control Board (India)", url: "https://cpcb.nic.in" },
  ];

  return (
    <section className="mt-20 anim-slide-up">
      <h2 className="text-2xl font-semibold mb-6" style={{ color: "#e2e8f0" }}>
        Further Reading
      </h2>
      <div className="space-y-4">
        {resources.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl px-5 py-4 transition-all duration-200"
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              color: "#e2e8f0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
              e.currentTarget.style.background = "rgba(99, 102, 241, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
              e.currentTarget.style.background = "rgba(15, 23, 42, 0.7)";
            }}
          >
            <span className="font-medium">{item.name}</span>
            <FiExternalLink
              className="transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "#818cf8" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
