export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 opacity-80" />

      <div className="relative container-dark">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "rgba(30, 41, 59, 0.6)", color: "#e2e8f0" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Real-time Air Quality Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: "#f1f5f9" }}>
              Breathe Easy,<br />
              <span className="text-gradient">Live Healthy</span>
            </h1>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#94a3b8" }}>
              Monitor air quality in real-time, understand pollutants, and make informed decisions
              for a healthier lifestyle with our comprehensive environmental intelligence platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-dark-primary hover-lift px-8 py-4 text-lg font-semibold">
              Get Started
            </button>
            <button className="btn-dark-outline hover-lift px-8 py-4 text-lg font-semibold">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              {
                title: "Real-time Data",
                desc: "Live air quality monitoring with instant updates",
                color: "#6366f1",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                title: "Smart Insights",
                desc: "AI-powered analysis and personalized recommendations",
                color: "#10b981",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Global Coverage",
                desc: "Comprehensive data from cities worldwide",
                color: "#8b5cf6",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center space-y-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                  style={{ background: `${feature.color}20` }}
                >
                  <svg className="w-6 h-6" fill="none" stroke={feature.color} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: "#94a3b8" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}