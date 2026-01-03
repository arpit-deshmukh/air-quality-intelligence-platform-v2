import InfoCard from "./InfoCard";
import VideoCard from "./VideoCard";
import AQIImageCard2 from "./AQIImageCard2";

export default function AQIInfo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 anim-fade">

      <header className="text-center mb-14 anim-slide-up">
        <h1 className="text-4xl font-semibold text-blue-900 mb-4">
          Air Quality Index (AQI) Guide
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A clear and practical breakdown of AQI, its health impact,
          and steps you can take to stay safe.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center anim-slide-up">
        <InfoCard title="What is AQI?">
          <p className="text-gray-700 leading-relaxed">
            Air Quality Index (AQI) is a standardized scale that indicates
            how polluted the air is. It tracks key pollutants such as
            PM2.5, PM10, NO₂, SO₂, CO, and O₃ to assess health risks.
          </p>
        </InfoCard>

        <VideoCard
          src="/videos/what-is-aqi.mp4"
          caption="Understanding the Air Quality Index"
        />
      </section>

      <section className="mt-16 anim-slide-up">
        <AQIImageCard2
          src="/images/aqi-2.png"
          alt="AQI Category Guide Diagram"
        />
      </section>

      <section className="mt-20 anim-slide-up">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          Health Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <InfoCard title="Effects on Health">
            <ul className="list-disc ml-5 text-gray-700 space-y-2 leading-relaxed">
              <li>High AQI increases risk of respiratory and heart diseases.</li>
              <li>PM2.5 particles penetrate deep into lungs and bloodstream.</li>
              <li>Children, elderly, and pregnant women are most vulnerable.</li>
              <li>Long-term exposure may lead to chronic health conditions.</li>
            </ul>
          </InfoCard>

          <VideoCard
            src="/videos/health-impact.mp4"
            caption="How PM2.5 affects the lungs"
          />
        </div>
      </section>

      <section className="mt-20 anim-slide-up">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          Precautionary Measures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <InfoCard title="Stay Safe">
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>• Wear an N95 mask when AQI exceeds 200</p>
              <p>• Use indoor air purifiers</p>
              <p>• Avoid outdoor exercise during poor AQI</p>
              <p>• Keep windows closed when pollution levels are high</p>
            </div>
          </InfoCard>

          <VideoCard
            src="/videos/precaustions.mp4"
            caption="Precautionary practices during high AQI"
          />
        </div>
      </section>

    </div>
  );
}
