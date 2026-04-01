import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Wind,
  ArrowUpRight,
  Heart,
  ExternalLink,
} from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Explore Cities", path: "/explorePage" },
    { label: "Compare AQI", path: "/comparePage" },
    { label: "Analytics", path: "/analyticsPage" },
    { label: "AQI Information", path: "/aqi-info" },
  ],
  resources: [
    { label: "Research Hub", path: "/researchPage" },
    { label: "Solutions & Models", path: "/solutionsPage" },
    { label: "Eco Store", path: "/store" },
    { label: "Metadata", path: "/meta" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arpit-deshmukh",
    icon: Github,
    hoverColor: "hover:text-white hover:border-white/30",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arpit-deshmukh-08877227a/",
    icon: Linkedin,
    hoverColor: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    label: "Email",
    href: "mailto:contact@aqintelligence.com",
    icon: Mail,
    hoverColor: "hover:text-emerald-400 hover:border-emerald-400/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-0 overflow-hidden" style={{ background: "#030712" }}>
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #6366f1 20%, #8b5cf6 50%, #6366f1 80%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/10 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                }}
              >
                <Wind className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: "#f1f5f9" }}
              >
                AQI Intelligence
              </span>
            </Link>

            <p
              className="leading-relaxed max-w-sm text-[15px]"
              style={{ color: "#94a3b8" }}
            >
              Empowering environmental awareness through real-time air quality
              data, research insights, and actionable solutions for a healthier
              planet.
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5" style={{ color: "#64748b" }}>
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">Mumbai, India</span>
              </div>
              <a
                href="mailto:contact@aqintelligence.com"
                className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                style={{ color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>contact@aqintelligence.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#64748b" }}
            >
              Platform
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-[15px] transition-colors duration-200"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-200 group-hover:scale-150"
                      style={{ background: "#475569" }}
                    />
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#64748b" }}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-[15px] transition-colors duration-200"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-200 group-hover:scale-150"
                      style={{ background: "#475569" }}
                    />
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#64748b" }}
            >
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200 ${social.hoverColor}`}
                    style={{
                      color: "#94a3b8",
                      borderColor: "rgba(51,65,85,0.5)",
                      background: "rgba(15,23,42,0.5)",
                    }}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">{social.label}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div
          className="h-px w-full mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #1e293b, transparent)" }}
        />

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm flex items-center gap-1.5" style={{ color: "#475569" }}>
            © {currentYear} AQI Intelligence · Built with
            <Heart
              className="w-3.5 h-3.5 inline-block"
              style={{ color: "#ef4444" }}
              fill="#ef4444"
            />
            for cleaner air
          </p>

          <div className="flex items-center gap-6 text-sm" style={{ color: "#475569" }}>
            <Link
              to="/aqi-info"
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              About
            </Link>
            <Link
              to="/researchPage"
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Research
            </Link>
            <Link
              to="/solutionsPage"
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Solutions
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
