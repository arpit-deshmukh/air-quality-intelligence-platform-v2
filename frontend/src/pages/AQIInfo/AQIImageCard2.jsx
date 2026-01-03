export default function AQIImageCard2({ src, alt }) {
  return (
    <div
      className="
        group w-full rounded-2xl overflow-hidden
        bg-white border border-gray-200
        shadow-sm transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1
        cursor-pointer
      "
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="
            w-full h-auto object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />
      </div>
    </div>
  );
}
