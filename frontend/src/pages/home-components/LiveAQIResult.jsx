import AQICard from "../../components/cards/AQICard";
import Loader from "../../components/common/Loader";
import ErrorBox from "../../components/common/ErrorBox";

export default function LiveAQIResult({ loading, error, data }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="text-center space-y-4">
          <Loader />
          <p className="text-slate-300 animate-pulse">
            Analyzing air quality data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-16 animate-fade-in">
        <div className="max-w-md">
          <ErrorBox message={error} />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="card max-w-md mx-auto text-center bg-slate-800 border border-slate-700">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Ready to Check Air Quality
          </h3>
          <p className="text-slate-300 text-sm">
            Select a city and click "Get AQI" to view real-time air quality data
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-8 animate-slide-up">
      <AQICard {...data} />
    </div>
  );
}
