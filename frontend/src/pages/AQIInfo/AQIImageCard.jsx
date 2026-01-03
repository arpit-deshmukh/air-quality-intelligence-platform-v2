export default function AQIImageCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6
                    flex justify-center items-center w-full
                    transition hover:shadow-md anim-fade">
      <img
        src="/images/i-1.png"
        alt="AQI Pollutant Breakdown"
        className="w-full max-w-3xl object-contain"
      />
    </div>
  );
}
