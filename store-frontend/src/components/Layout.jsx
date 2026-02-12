import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold">
            AQI Store
          </Link>

          <Link
            to="/products"
            className="text-sm text-muted"
          >
            Products
          </Link>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}