import CitySelect from "./components/CitySelect";
import AQIScoreBox from "./components/AQIScoreBox";
import ComparisonCards from "./components/ComparisonCards";
import PollutantBars from "./components/PollutantBars";
import SuggestionBox from "./components/SuggestionBox";
import ChartCompare from "./components/ChartCompare";

export default function Compare() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Compare Two Cities</h1>

      <CitySelect />

      <div className="mt-8">
        <AQIScoreBox />
      </div>

      <div className="mt-8">
        <ComparisonCards />
      </div>

      <div className="mt-10">
        <PollutantBars />
      </div>

      <div className="mt-12">
        <ChartCompare />
      </div>

      <div className="mt-12">
        <SuggestionBox />
      </div>
    </div>
  );
}
