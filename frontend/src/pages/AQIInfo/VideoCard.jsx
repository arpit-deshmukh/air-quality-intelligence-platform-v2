export default function VideoCard({ src, caption }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <video src={src} controls className="rounded-lg w-full" />
      {caption && <p className="text-gray-600 mt-2">{caption}</p>}
    </div>
  );
}
