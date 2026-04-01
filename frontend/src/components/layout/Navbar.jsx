import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Menu,
  X,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Wind,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Models", path: "/solutionsPage" },
  { label: "Store", path: "/store" },
  { label: "Research", path: "/researchPage" },
  { label: "Explore", path: "/explorePage" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { getCartItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const cartItemCount = getCartItemCount();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? "rgba(3, 7, 18, 0.85)"
          : "rgba(3, 7, 18, 0.95)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: isScrolled
          ? "1px solid rgba(99, 102, 241, 0.15)"
          : "1px solid rgba(30, 41, 59, 0.5)",
        boxShadow: isScrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(99, 102, 241, 0.03)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shadow-lg transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  boxShadow: "0 0 16px rgba(99, 102, 241, 0.25)",
                }}
              >
                <Wind className="w-4.5 h-4.5" style={{ color: "#ffffff" }} />
              </div>
              <span
                className="hidden sm:block text-lg font-bold tracking-tight"
                style={{ color: "#f1f5f9" }}
              >
                AQI Intelligence
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={item.path}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                    style={{
                      color: isActive ? "#e2e8f0" : "#94a3b8",
                      background: isActive ? "rgba(99, 102, 241, 0.1)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#e2e8f0";
                        e.currentTarget.style.background = "rgba(51, 65, 85, 0.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#94a3b8";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {user && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/store/cart"
                  className="relative p-2.5 rounded-lg transition-all duration-200"
                  title="Shopping Cart"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#e2e8f0";
                    e.currentTarget.style.background = "rgba(51, 65, 85, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <AnimatePresence>
                    {cartItemCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-0.5 -right-0.5 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1"
                        style={{
                          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          boxShadow: "0 0 8px rgba(99, 102, 241, 0.4)",
                        }}
                      >
                        {cartItemCount > 99 ? "99+" : cartItemCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            )}

            <div className="hidden md:flex items-center gap-2.5">
              {user ? (
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border"
                    style={{
                      background: "rgba(30, 41, 59, 0.5)",
                      borderColor: "rgba(51, 65, 85, 0.5)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <User className="w-3.5 h-3.5" style={{ color: "#a5b4fc" }} />
                    </div>
                    <span
                      className="text-sm truncate max-w-[100px] font-medium"
                      style={{ color: "#cbd5e1" }}
                    >
                      {user.email.split("@")[0]}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                    style={{
                      background: "rgba(239, 68, 68, 0.12)",
                      color: "#fca5a5",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
                      e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(239, 68, 68, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.2)";
                    }}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </motion.button>
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                      style={{ color: "#94a3b8" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#e2e8f0";
                        e.currentTarget.style.background = "rgba(51, 65, 85, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#94a3b8";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <LogIn className="w-4 h-4" />
                      Login
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
                        color: "#ffffff",
                        boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 28px rgba(99, 102, 241, 0.35)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(99, 102, 241, 0.2)";
                      }}
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up
                    </Link>
                  </motion.div>
                </div>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e2e8f0";
                e.currentTarget.style.background = "rgba(51, 65, 85, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(3, 7, 18, 0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(30, 41, 59, 0.5)",
            }}
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
                        style={{
                          color: isActive ? "#a5b4fc" : "#94a3b8",
                          background: isActive ? "rgba(99, 102, 241, 0.1)" : "transparent",
                          borderLeft: isActive ? "3px solid #6366f1" : "3px solid transparent",
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-2"
                style={{ borderTop: "1px solid rgba(30, 41, 59, 0.5)" }}
              >
                {user ? (
                  <div className="space-y-3">
                    <div
                      className="flex items-center gap-3 px-4 py-3 rounded-lg"
                      style={{
                        background: "rgba(30, 41, 59, 0.4)",
                        border: "1px solid rgba(51, 65, 85, 0.3)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(99, 102, 241, 0.15)" }}
                      >
                        <User className="w-4 h-4" style={{ color: "#a5b4fc" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm truncate font-medium"
                          style={{ color: "#cbd5e1" }}
                        >
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/store/cart"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200"
                      style={{ color: "#94a3b8" }}
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Shopping Cart</span>
                      </div>
                      {cartItemCount > 0 && (
                        <span
                          className="text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-2"
                          style={{
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          }}
                        >
                          {cartItemCount > 99 ? "99+" : cartItemCount}
                        </span>
                      )}
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-3 font-medium rounded-lg transition-all duration-200"
                      style={{
                        background: "rgba(239, 68, 68, 0.12)",
                        color: "#fca5a5",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                      }}
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors duration-200"
                      style={{ color: "#94a3b8" }}
                    >
                      <LogIn className="w-5 h-5" />
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 w-full px-4 py-3 font-medium rounded-lg transition-all duration-200 text-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
                        color: "#ffffff",
                        boxShadow: "0 0 16px rgba(99, 102, 241, 0.2)",
                      }}
                    >
                      <UserPlus className="w-5 h-5" />
                      Sign Up
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
