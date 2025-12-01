import InfoCard from "./AQIInfo/InfoCard";
import VideoCard from "./AQIInfo/VideoCard";
import AQIImageCard from "./AQIInfo/AQIImageCard";
import AQIImageCard2 from "./AQIInfo/AQIImageCard2";

export default function AQIInfo() {

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
          caption="What is AQI."
        />
      </div>

      <section className="mt-10">
        <AQIImageCard2
          src="/images/aqi-2.png"
          alt="AQI Category Guide Diagram"
        />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-blue-900 font-semibold mb-4">Health Impact</h2>

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
            caption=" PM2.5 impact on lungs."
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-blue-900 font-semibold mb-4">Precautionary Measures</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard title="Stay Safe">
            <div className="space-y-2 text-gray-700">
              <p>• Wear N95 mask when AQI is above 200</p>
              <p>• Use indoor air purifiers</p>
              <p>• Avoid outdoor exercise in poor AQI</p>
              <p>• Keep windows closed during high AQI</p>
            </div>
          </InfoCard>

          <VideoCard
            src="/videos/precaustions.mp4"
            caption="Prevention Guide"
          />
        </div>
      </section>
    </div>
  );
}
