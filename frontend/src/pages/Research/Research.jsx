

const researchList = [
  {
    title: "Health effects of PM2.5 and PM10 — WHO report",
    source: "World Health Organization",
    summary:
      "A global review of mortality, lung disease, and cardiovascular impacts caused by fine (PM2.5) and coarse (PM10) particulate matter.",
    url: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
    image: "/research-cards/r1.png"
  },
  {
    title: "Air quality trends in Indian cities (2010–2024)",
    source: "Research Journal of Environmental Sciences",
    summary:
      "A decade-long study analyzing seasonal patterns, pollution spikes, and emission sources across major Indian cities.",
    url: "https://www.mdpi.com/2073-4433/16/5/534",
    image: "/research-cards/r2.png"
  },
  {
    title: "World Air Quality — Global Database and Insights",
    source: "OpenAQ & IQAir",
    summary:
      "Worldwide real-time and historical AQ data with global patterns, trends, and cross-country comparisons.",
    url: "https://openaq.org",
    image: "/research-cards/r4.png"
  },
  {
    title: "Impact of traffic and industrial emissions on urban air pollution",
    source: "Environmental Pollution Journal",
    summary:
      "Correlation model showing how traffic density and industrial clusters directly influence NO₂ & SO₂ concentrations.",
    url: "https://www.researchgate.net/publication/284738495_Correlations_between_noise_level_and_pollutants_concentration_in_order_to_assess_the_level_of_air_pollution_induced_by_heavy_traffic",
    image: "/research-cards/r3.png"
  }
];



export default function Research() {
  return (

    <div className="page-gradient min-h-screen p-6 max-w-5xl mx-auto ">
      <h1 className="text-3xl font-bold text-blue-900 mb-2">AQI Research & Studies</h1>
      <p className="section-subtitle">
        A curated collection of scientific studies, global datasets, and research insights.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {researchList.map((item, idx) => (
          <div
            key={idx}
            className="card fade-in border-l-4 border-blue-500 rounded-lg p-6 bg-white shadow-sm transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer"
          >
            <div className="w-full h-40 mb-4 overflow-hidden rounded-md ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{item.source}</p>
            <p className="text-gray-700 leading-relaxed">{item.summary}</p>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-3 inline-block hover:underline font-medium"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>





    </div>
  );
}
