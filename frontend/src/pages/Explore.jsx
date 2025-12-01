import { useEffect, useState } from "react";
import { getExploreData } from "../api/explore";
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
    try {
      const res = await getExploreData();
      setCityData(res?.data || []);  // FIX
    } catch (e) {
      console.error(e);
      setCityData([]);
    }
    setLoading(false);
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
            aqi={item.aqi}
            onClick={() => navigate(`/city/${item.city}`)}
          />
        ))}
      </div>
    </div>
  );
}
