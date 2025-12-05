export default function AQIImageCard2({ src, alt }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow bg-blue border-blue-600 p-4 transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  );
}