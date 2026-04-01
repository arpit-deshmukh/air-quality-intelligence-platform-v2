import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getCartItemCount } = useCart();

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

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 pr-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/store/cart"
                className="relative p-2 text-slate-300 hover:text-white transition-colors duration-200"
                title="Shopping Cart"
              >
                🛒
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </Link>
              <span className="text-slate-300 text-sm">Welcome, {user.email}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
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

            {/* Mobile Auth Buttons */}
            <div className="border-t border-slate-700 pt-4 mt-2">
              {user ? (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/store/cart"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    🛒 Cart
                    {getCartItemCount() > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getCartItemCount()}
                      </span>
                    )}
                  </Link>
                  <span className="text-slate-300 text-sm px-4">Welcome, {user.email}</span>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
