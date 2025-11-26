const researchList = [
  {
    title: "Health effects of PM2.5 and PM10 — WHO report",
    source: "World Health Organization",
    summary:
      "Comprehensive review of short- and long-term health effects of fine and coarse particulate matter, including mortality, lung disease and cardiovascular risks.",
    url: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health"
  },
  {
    title: "Air quality trends in Indian cities (2010–2024)",
    source: "Research Journal of Environmental Sciences",
    summary:
      "A longitudinal study of air quality parameters over a decade in 10 major Indian cities, analysing seasonality and pollution sources.",
    url: "https://example.com/indian-air-quality-trends-2010-2024"
  },
  {
    title: "World Air Quality — Global Database and Insights",
    source: "OpenAQ & IQAir",
    summary:
      "Global dataset and interactive dashboard for comparing air quality across cities worldwide.",
    url: "https://openaq.org"
  },
  {
    title: "Impact of traffic and industrial emissions on urban air pollution — case study",
    source: "Environmental Pollution Journal",
    summary:
      "Investigation showing correlation between traffic density, industrial activity, and spikes in NO₂ & SO₂ levels in urban areas.",
    url: "https://example.com/traffic-industrial-emissions-study"
  }
  // you can add more entries here
];

export default function Research() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AQI Research & Studies</h1>

      <div className="space-y-6">
        {researchList.map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-5 border">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <div className="text-sm text-gray-500 mb-2">{item.source}</div>
            <p className="text-gray-700 mb-2">{item.summary}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read full paper / article
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Further Reading & Resources</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>
            <a href="https://www.who.int/airpollution" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              WHO — Air Pollution and Health
            </a>
          </li>
          <li>
            <a href="https://www.epa.gov/pm-pollution" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              US EPA — Particulate Matter (PM) Pollution
            </a>
          </li>
          <li>
            <a href="https://aqicn.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              AQICN — Real-time Global Air Quality Index and Maps
            </a>
          </li>
          <li>
            <a href="https://openaq.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              OpenAQ — Open Air Quality Data Platform
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
