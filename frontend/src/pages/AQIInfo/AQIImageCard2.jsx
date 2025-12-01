export default function AQIImageCard2({ src, alt }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow bg-blue border-blue-600 p-4">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  );
}