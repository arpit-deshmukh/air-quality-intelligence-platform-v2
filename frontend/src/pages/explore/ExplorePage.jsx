import { useEffect, useState, useCallback } from "react";
import { fetchLiveAQI } from "../../api/aqi";
import { cities } from "../../data/cities";

import ExploreHeader from "./components/ExploreHeader";
import SearchBox from "./components/SearchBox";
import CategoryFilters from "./components/CategoryFilters";
import CityTile from "./components/CityTile";
import TileSkeleton from "./components/TileSkeleton";
import CountdownTimer from "../../components/common/CountdownTimer";

import { filterCitiesByCategory } from "./utils/categoryFilterUtils";

export default function Explore() {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("india");
  const [query, setQuery] = useState("");

  const loadCities = useCallback(async () => {
    setLoading(true);

    const results = await Promise.all(
      cities.map(async (c) => {
        try {
          const res = await fetchLiveAQI(c.name);
          return {
            city: c.name,
            country: c.country,
            aqi: res?.aqi ?? null,
            pm25: res?.pm25,
            pm10: res?.pm10,
            no2: res?.no2,
            so2: res?.so2,
            co: res?.co,
            o3: res?.o3,
          };
        } catch {
          return {
            city: c.name,
            country: c.country,
            aqi: null,
          };
        }
      })
    );

    setCityData(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  const filtered = filterCitiesByCategory(cityData, active).filter((c) =>
    c.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 anim-fade">
      <ExploreHeader />

      <SearchBox value={query} onChange={setQuery} />

      <div className="mt-4">
        <CountdownTimer />
      </div>

      <CategoryFilters active={active} setActive={setActive} />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[...Array(6)].map((_, i) => (
            <TileSkeleton key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-12 text-center text-gray-500">
          No cities match your search or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filtered.map((item) => (
            <CityTile key={item.city} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
