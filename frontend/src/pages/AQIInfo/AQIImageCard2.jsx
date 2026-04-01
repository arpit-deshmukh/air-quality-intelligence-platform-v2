export default function AQIImageCard2({ src, alt }) {
  return (
    <div
      className="group w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1"
      style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}
