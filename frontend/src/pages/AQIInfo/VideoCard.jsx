export default function VideoCard({ src, caption }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm 
    transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer">
      <video src={src} controls className="rounded-lg w-full" />
      {caption && <p className="text-gray-600 mt-2">{caption}</p>}
    </div>
  );
}
