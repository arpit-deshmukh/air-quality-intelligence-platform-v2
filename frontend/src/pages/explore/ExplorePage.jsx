import { useEffect, useState } from "react";
import { fetchLiveAQI } from "../../api/aqi";
import { cities } from "../../data/cities";

import ExploreHeader from "./components/ExploreHeader";
import SearchBox from "./components/SearchBox";
import CategoryFilters from "./components/CategoryFilters";
import CityTile from "./components/CityTile";
import TileSkeleton from "./components/TileSkeleton";

import { filterCitiesByCategory } from "./utils/categoryFilterUtils";

export default function Explore() {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("india");
  const [query, setQuery] = useState("");

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    const results = [];

    for (const c of cities) {
      try {
        const res = await fetchLiveAQI(c.name);

        
        results.push({
          city: c.name,
            country: c.country, 
          aqi: res?.aqi ?? null,
          pm25: res?.pm25,
          pm10: res?.pm10,
          no2: res?.no2,
          so2: res?.so2,
          co: res?.co,
          o3: res?.o3,
        });
      } catch (err) {
        results.push({
          city: c.name,
          aqi: null,
        });
      }
    }

    setCityData(results);
    setLoading(false);
  };

  const filtered = filterCitiesByCategory(cityData, active).filter((c) =>
    c.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <ExploreHeader />

      <SearchBox value={query} onChange={setQuery} />

      <CategoryFilters active={active} setActive={setActive} />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[...Array(6)].map((_, i) => (
            <TileSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {filtered.map((item) => (
            <CityTile key={item.city} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
