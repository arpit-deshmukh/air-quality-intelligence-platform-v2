import CitySelect from "./components/CitySelect";
import AQIScoreBox from "./components/AQIScoreBox";
import ComparisonCards from "./components/ComparisonCards";
import PollutantBars from "./components/PollutantBars";
import SuggestionBox from "./components/SuggestionsBox";
import ChartCompare from "./components/ChartCompare";

export default function Compare() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 anim-fade">
      <header className="mb-10 anim-slide-up">
        <h1 className="text-3xl font-semibold text-blue-900 mb-2">
          Compare Two Cities
        </h1>
        <p className="text-gray-600 max-w-xl">
          Side-by-side air quality comparison to understand pollution levels,
          trends, and health impact.
        </p>
      </header>

      <section className="mb-10 anim-slide-up">
        <CitySelect />
      </section>

      <section className="mb-12 anim-slide-up">
        <AQIScoreBox />
      </section>

      <section className="mb-14 anim-slide-up">
        <ComparisonCards />
      </section>

      <section className="mb-16 anim-slide-up">
        <PollutantBars />
      </section>

      <section className="mb-16 anim-slide-up">
        <ChartCompare />
      </section>

      <section className="anim-slide-up">
        <SuggestionBox />
      </section>
    </div>
  );
}
