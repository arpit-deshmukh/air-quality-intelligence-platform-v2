export default function PollutantInfoGrid() {
  const pollutantInfo = {
    "PM2.5": {
      meaning: "Fine inhalable particles that penetrate deep into the lungs.",
      source: "Vehicle exhaust, biomass burning, dust, and construction.",
      health: "Triggers asthma, reduces lung function, causes long-term respiratory issues.",
      guidance: "Avoid outdoor exercise; wear a mask; keep windows closed during rush hours."
    },
    "PM10": {
      meaning: "Coarse dust particles that irritate the eyes, nose, and throat.",
      source: "Road dust, construction, soil, and industrial activity.",
      health: "Short-term breathing discomfort; worsens asthma.",
      guidance: "Avoid dusty roads; consider wearing a mask outdoors."
    },
    "NO₂": {
      meaning: "Toxic gas mainly produced from vehicles and industrial activity.",
      source: "Traffic congestion, diesel vehicles, power plants.",
      health: "Reduces lung function and worsens asthma.",
      guidance: "Avoid main roads during peak traffic hours."
    },
    "SO₂": {
      meaning: "Gas produced from burning coal and industrial activities.",
      source: "Thermal power plants, factories, and fuel combustion.",
      health: "Irritates eyes and throat; harmful for people with asthma.",
      guidance: "Asthma patients should stay indoors."
    },
    "CO": {
      meaning: "Colorless gas from incomplete combustion.",
      source: "Vehicles, stoves, heaters, industrial burners.",
      health: "Reduces oxygen supply; causes dizziness and headaches.",
      guidance: "Avoid enclosed parking areas; reduce exposure to traffic."
    },
    "O₃": {
      meaning: "Ground-level ozone formed by sunlight reacting with pollutants.",
      source: "Strong sunlight + traffic emissions.",
      health: "Causes coughing, throat irritation, and chest discomfort.",
      guidance: "Avoid outdoor afternoon activities."
    }
  };

  const pollutants = Object.keys(pollutantInfo);

  return (
       

    <>
        
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {pollutants.map((name) => {
        const info = pollutantInfo[name];

        return (
          <div
            key={name}
            className="
              p-4 border rounded-lg bg-white shadow-sm
              hover:shadow-xl hover:scale-[1.02]
              transition-all duration-200 ease-out cursor-pointer
            "
          >
            <p className="text-lg font-semibold mb-2">{name}</p>

            <p className="text-gray-700 text-sm">
              <b>Meaning:</b> {info.meaning}
            </p>

            <p className="text-gray-700 text-sm mt-1">
              <b>Sources:</b> {info.source}
            </p>

            <p className="text-gray-700 text-sm mt-1">
              <b>Health:</b> {info.health}
            </p>

            <p className="text-gray-900 text-sm font-semibold mt-2">
              <b>Guidance:</b> {info.guidance}
            </p>
          </div>
        );
      })}
    </div>
    </>
  
  );
}
