const researchList = [
  {
    title: "Health effects of PM2.5 and PM10 — WHO report",
    source: "World Health Organization",
    summary: "A global review of mortality, lung disease, and cardiovascular impacts caused by fine (PM2.5) and coarse (PM10) particulate matter.",
    url: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
    image: "/research-cards/r1.png"
  },
  {
    title: "Air quality trends in Indian cities (2010–2024)",
    source: "Research Journal of Environmental Sciences",
    summary: "A decade-long study analyzing seasonal patterns, pollution spikes, and emission sources across major Indian cities.",
    url: "https://www.mdpi.com/2073-4433/16/5/534",
    image: "/research-cards/r2.png"
  },
  {
    title: "World Air Quality — Global Database and Insights",
    source: "OpenAQ & IQAir",
    summary: "Worldwide real-time and historical AQ data with global patterns, trends, and cross-country comparisons.",
    url: "https://openaq.org",
    image: "/research-cards/r4.png"
  },
  {
    title: "Impact of traffic and industrial emissions on urban air pollution",
    source: "Environmental Pollution Journal",
    summary: "Correlation model showing how traffic density and industrial clusters directly influence NO₂ & SO₂ concentrations.",
    url: "https://www.researchgate.net/publication/284738495_Correlations_between_noise_level_and_pollutants_concentration_in_order_to_assess_the_level_of_air_pollution_induced_by_heavy_traffic",
    image: "/research-cards/r3.png"
  }
];

export default function Research() {
  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>
          AQI Research & Studies
        </h1>
        <p className="max-w-2xl" style={{ color: "#94a3b8" }}>
          A curated collection of scientific studies, peer-reviewed journals,
          and global air quality datasets.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {researchList.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
            }}
          >
            <div className="h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-wide font-medium mb-2" style={{ color: "#a5b4fc" }}>
                {item.source}
              </p>
              <h2 className="text-lg font-semibold leading-snug mb-3" style={{ color: "#e2e8f0" }}>
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                {item.summary}
              </p>
              <span className="inline-flex items-center text-sm font-medium" style={{ color: "#818cf8" }}>
                Read full study
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
