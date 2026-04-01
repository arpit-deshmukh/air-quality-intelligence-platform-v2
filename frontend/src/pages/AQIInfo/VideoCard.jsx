export default function VideoCard({ src, caption }) {
  return (
    <div
      className="rounded-xl p-4 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 anim-fade"
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
      }}
    >
      <video
        src={src}
        controls
        className="rounded-lg w-full aspect-video"
        style={{ background: "#000" }}
      />
      {caption && (
        <p className="text-sm mt-3 leading-relaxed" style={{ color: "#94a3b8" }}>
          {caption}
        </p>
      )}
    </div>
  );
}
