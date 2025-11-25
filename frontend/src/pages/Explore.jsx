import { useEffect, useState } from "react";
import { fetchLiveAQI } from "../api/aqi";
import { cities } from "../data/cities";
import CityQuickCard from "../components/cards/CityQuickCard";
import Loader from "../components/common/Loader";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    let results = [];

    for (const c of cities) {
      try {
        const res = await fetchLiveAQI(c.name);
        results.push(res);
      } catch {
        results.push({ city: c.name, aqi: null });
      }
    }

    setCityData(results);
    setLoading(false);
  };

  const openCityDetails = (city) => {
    navigate(`/city/${city}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Cities</h1>

      {loading && <Loader />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cityData.map((item, index) => (
          <CityQuickCard
            key={index}
            city={item.city}
            aqi={item.aqi ?? "N/A"}
            onClick={() => openCityDetails(item.city)}
          />
        ))}
      </div>
    </div>
  );
}
