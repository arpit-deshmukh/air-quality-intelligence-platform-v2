export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full" style={{ border: "4px solid #1e293b" }}></div>
        <div className="absolute top-0 w-12 h-12 rounded-full animate-spin" style={{ border: "4px solid transparent", borderTopColor: "#6366f1" }}></div>
      </div>
      <div className="mt-4 flex space-x-1">
        <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#6366f1", animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#6366f1", animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#6366f1", animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}
