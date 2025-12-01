import InfoCard from "./aqiInfo/InfoCard";
import VideoCard from "./aqiInfo/VideoCard";
import AQIImageCard from "./AQIInfo/AQIImageCard";
export default function AQIInfo() {
  const ranges = [
    { level: "Good", aqi: "0–50", color: "bg-green-500", desc: "Air is clean and healthy." },
    { level: "Satisfactory", aqi: "51–100", color: "bg-yellow-400", desc: "Mild discomfort for sensitive groups." },
    { level: "Moderate", aqi: "101–200", color: "bg-orange-500", desc: "Discomfort to people with lung/heart issues." },
    { level: "Poor", aqi: "201–300", color: "bg-red-500", desc: "Breathing issues on prolonged exposure." },
    { level: "Very Poor", aqi: "301–400", color: "bg-purple-600", desc: "Respiratory illness likely." },
    { level: "Severe", aqi: "401–500", color: "bg-rose-800", desc: "Serious health risk. Avoid outdoor activity." }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-6">Air Quality Index (AQI) Guide</h1>
      <p className="text-gray-600 text-center mb-10">
        A complete breakdown of AQI, its impact, and how to protect yourself.
      </p>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard title="What is AQI?">
          <p className="text-gray-700 leading-relaxed">
            Air Quality Index (AQI) is a standardized scale that represents
            how polluted the air is. It tracks pollutants like PM2.5, PM10,
            NO₂, SO₂, CO, and O₃.
          </p>
        </InfoCard>

        <VideoCard
          src="/videos/what-is-aqi.mp4"
          caption="Short explainer video generated with VEO."
        />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">AQI Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ranges.map((item, i) => (
            <InfoCard key={i} title={item.level}>
              <div className="flex justify-between items-center mb-2">
                <span className={`px-3 py-1 text-white rounded ${item.color}`}>
                  {item.aqi}
                </span>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Health Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Effects on Health">
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Higher AQI increases risk of respiratory and heart issues.</li>
              <li>PM2.5 penetrates deep into the lungs and bloodstream.</li>
              <li>Children, elderly and pregnant women are highly vulnerable.</li>
              <li>Long-term exposure leads to chronic diseases.</li>
            </ul>
          </InfoCard>

          <VideoCard
            src="/videos/health-impact.mp4"
            caption="Visualization of PM2.5 impact on lungs."
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Precautionary Measures</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard title="Stay Safe">
            <div className="space-y-2 text-gray-700">
              <p>• Wear N95 mask when AQI > 200</p>
              <p>• Use indoor air purifiers</p>
              <p>• Avoid outdoor exercise in poor AQI</p>
              <p>• Keep windows closed during high AQI</p>
            </div>
          </InfoCard>

          <VideoCard
            src="/videos/precaustions.mp4"
            caption="8-second prevention guide."
          />
        </div>
      </section>
    </div>
  );
}
