import { FiExternalLink } from "react-icons/fi";

export default function FurtherReadingSolutions() {
  const resources = [
    {
      name: "UNEP — Global Pollution Reports",
      url: "https://www.unep.org",
    },
    {
      name: "IPCC — Climate & Air Quality Findings",
      url: "https://www.ipcc.ch",
    },
    {
      name: "Central Pollution Control Board (India)",
      url: "https://cpcb.nic.in",
    },
  ];

  return (
    <section className="mt-20 anim-slide-up">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">
        Further Reading
      </h2>

      <div className="space-y-4">
        {resources.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-between
              rounded-xl border border-gray-200 bg-white
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
        ))}
      </div>
    </section>
  );
}
