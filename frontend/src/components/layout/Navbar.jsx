export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex gap-6">
      <a href="/" className="font-bold text-lg">AQI Intelligence</a>
      <a href="/explore">Explore</a>
      <a href="/compare">Compare</a>
      <a href="/meta">AQI Info</a>
    </nav>
  );
}
