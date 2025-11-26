export default function AQIInfo() {
  const ranges = [
    { level: "Good", aqi: "0–50", color: "bg-green-500", desc: "Air quality is satisfactory." },
    { level: "Satisfactory", aqi: "51–100", color: "bg-yellow-400", desc: "Acceptable but sensitive groups may feel mild discomfort." },
    { level: "Moderate", aqi: "101–200", color: "bg-orange-500", desc: "Breathing discomfort to people with lungs/heart issues." },
    { level: "Poor", aqi: "201–300", color: "bg-red-500", desc: "Discomfort to most people on prolonged exposure." },
    { level: "Very Poor", aqi: "301–400", color: "bg-purple-600", desc: "Respiratory illness likely in prolonged exposure." },
    { level: "Severe", aqi: "401–500", color: "bg-rose-800", desc: "Serious health risk. Avoid outdoor activity." }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Air Quality Index (AQI) Guide</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Understand what AQI means, how it affects your health, and how to stay safe.
      </p>

      {/* Section 1 — What is AQI */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What is AQI?</h2>
        <p className="text-gray-700 leading-relaxed">
          The Air Quality Index (AQI) is a numerical scale used to communicate how polluted the air currently is 
          or how polluted it is forecast to become. It considers pollutants like PM2.5, PM10, NO₂, SO₂, CO and O₃.
        </p>
      </section>

      {/* Section 2 — AQI Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">AQI Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ranges.map((item, index) => (
            <div key={index} className="p-5 rounded-xl shadow bg-white border">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{item.level}</h3>
                <span className={`px-3 py-1 text-white rounded ${item.color}`}>
                  {item.aqi}
                </span>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Health Impact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Health Impact</h2>

        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
          <li>Higher AQI increases risk of respiratory and heart issues.</li>
          <li>PM2.5 is the most dangerous pollutant as it enters bloodstream.</li>
          <li>Children, elderly and pregnant women are most vulnerable.</li>
          <li>High pollution reduces lung capacity and immunity.</li>
          <li>Long-term exposure increases chances of chronic disease.</li>
        </ul>
      </section>

      {/* Section 4 — Precautions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Precautionary Measures</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl bg-gray-50">Wear N95 mask when AQI > 200</div>
          <div className="p-4 border rounded-xl bg-gray-50">Use indoor air purifiers</div>
          <div className="p-4 border rounded-xl bg-gray-50">Avoid outdoor exercise in poor AQI</div>
          <div className="p-4 border rounded-xl bg-gray-50">Keep windows closed in severe AQI</div>
        </div>
      </section>
    </div>
  )
}
