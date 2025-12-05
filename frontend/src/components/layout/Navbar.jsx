import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    ["Home", "/"],
    ["Models", "/solutionsPage"],
    ["AQI Info", "/aqi-info"],
    ["Research", "/researchPage"],
    ["Explore", "/explorePage"],
  ];

  return (
    <nav className="flex items-center justify-between px-2 py-1 shadow bg-gray-400 sticky top-0">

      {/* logo */}
      <Link
        to="/"
        className="flex items-center gap-2 font-bold text-xl transition-transform duration-200 hover:scale-105"
      >
        <img
          src="/images/logo_3.png"
          alt="logo"
          className="w-16 h-16 object-contain"
        />
      </Link>

      {/* navigation */}
      <div className="flex gap-10 pr-20 text-lg">
        {navItems.map(([label, path]) => (
          <Link
            key={label}
            to={path}
            className="
              transition-all duration-200
              hover:text-blue-700
              hover:text-[1.25rem]    /* makes text slightly bigger */
            "
          >
            {label}
          </Link>
        ))}
      </div>

    </nav>
  );
}
