export default function VideoCard({ src, caption }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm cursor-pointer
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-md hover:border-blue-200 anim-fade">
      <video
        src={src}
        controls
        className="rounded-lg w-full aspect-video bg-black"
      />
      {caption && (
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
}
