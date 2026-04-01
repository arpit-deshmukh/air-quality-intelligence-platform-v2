export default function AQIImageCard() {
  return (
    <div className="group relative overflow-hidden animate-fade-in">
      <div
        className="p-6 md:p-8 transition-all duration-500 backdrop-blur-sm rounded-2xl relative hover-lift"
        style={{
          background: "rgba(15, 23, 42, 0.7)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.03), transparent, rgba(139,92,246,0.03))" }}
        />

        <div className="relative z-10 flex justify-center items-center mb-6">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02]">
            <img
              src="/images/i-1.png"
              alt="AQI Pollutant Breakdown - Comprehensive air quality analysis chart"
              className="w-full max-w-4xl object-contain transition-all duration-700 group-hover:brightness-110 group-hover:contrast-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)" }}
            />
          </div>
        </div>

        <div className="relative z-10 text-center space-y-3">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "rgba(99, 102, 241, 0.1)", color: "#a5b4fc" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Interactive Data Visualization</span>
          </div>

          <h3 className="text-xl font-bold" style={{ color: "#e2e8f0" }}>
            Comprehensive Pollutant Analysis
          </h3>

          <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "#94a3b8" }}>
            Detailed breakdown of air pollutants and their impact on air quality.
            Interactive charts showing real-time data correlations and trends.
          </p>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
          <div
            className="backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            style={{ background: "rgba(99, 102, 241, 0.8)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Interactive Chart
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 transform translate-y-2 group-hover:translate-y-0">
          <div
            className="backdrop-blur-sm rounded-lg p-4 shadow-lg"
            style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
          >
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10b981" }} />
                <span className="font-medium" style={{ color: "#cbd5e1" }}>Real-time Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#6366f1", animationDelay: "0.5s" }} />
                <span className="font-medium" style={{ color: "#cbd5e1" }}>Interactive</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#8b5cf6", animationDelay: "1s" }} />
                <span className="font-medium" style={{ color: "#cbd5e1" }}>Comprehensive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
