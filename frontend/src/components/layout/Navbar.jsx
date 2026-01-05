import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    ["Home", "/"],
    ["Models", "/solutionsPage"],
    ["Store", "/store"],
    ["Research", "/researchPage"],
    ["Explore", "/explorePage"],
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-800/85 backdrop-blur border-b border-slate-700">
      <div className="flex items-center justify-between px-2 py-2">

        <Link
          to="/"
          className="ml-4 flex items-center gap-2 font-bold text-xl text-white transition-transform duration-200 hover:scale-105"

        >
          <img
            src="/images/logo_3.png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-10 pr-16 text-lg">
          {navItems.map(([label, path]) => {
            const isActive = location.pathname === path;

            return (
              <Link
                key={label}
                to={path}
                className={`
                  relative px-1 transition-all duration-200
                  text-slate-200 hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-full
                  after:origin-left after:scale-x-0
                  after:bg-blue-400
                  after:transition-transform after:duration-200
                  hover:after:scale-x-100
                  ${isActive ? "text-white after:scale-x-100" : ""}
                `}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 text-2xl pr-2"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800/90 border-t border-slate-700">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map(([label, path]) => {
              const isActive = location.pathname === path;

              return (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={`text-base ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
