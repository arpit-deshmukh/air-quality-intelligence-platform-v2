export default function SkeletonCityCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
      <div className="h-7 bg-gray-300 rounded w-1/4 mb-4" />

      <div className="grid grid-cols-3 gap-3">
        <div className="h-3 bg-gray-200 rounded" />
        <div className="h-3 bg-gray-200 rounded" />
        <div className="h-3 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
