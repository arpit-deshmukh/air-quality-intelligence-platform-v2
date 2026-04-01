import InfoCard from "./InfoCard";
import VideoCard from "./VideoCard";
import AQIImageCard2 from "./AQIImageCard2";

export default function AQIInfo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 anim-fade">
      <header className="text-center mb-16 anim-slide-up">
        <h1 className="text-4xl font-semibold mb-4 leading-tight" style={{ color: "#e2e8f0" }}>
          Air Quality Index (AQI) Guide
        </h1>
        <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "#94a3b8" }}>
          A clear and practical breakdown of AQI, its health impact,
          and steps you can take to stay safe.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center anim-slide-up">
        <InfoCard title="What is AQI?">
          <p>
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

      <section className="mt-20 anim-slide-up">
        <AQIImageCard2
          src="/images/aqi-2.png"
          alt="AQI Category Guide Diagram"
        />
      </section>

      <section className="mt-24 anim-slide-up">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: "#e2e8f0" }}>
          Health Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <InfoCard title="Effects on Health">
            <ul className="list-disc ml-5 space-y-2">
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

      <section className="mt-24 anim-slide-up">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: "#e2e8f0" }}>
          Precautionary Measures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <InfoCard title="Stay Safe">
            <div className="space-y-2">
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
