export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-100 border-t border-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">

        {/* Brand */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">AQI Intelligence</h2>
          <p className="text-sm text-gray-600 mt-1">
            Real-time air quality insights powered by Open-Meteo.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="/explore" className="text-gray-700 hover:text-black">
            Explore
          </a>
          <a href="/compare" className="text-gray-700 hover:text-black">
            Compare
          </a>
          <a href="/aqi-info" className="text-gray-700 hover:text-black">
            AQI Info
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-2">
          {/* GitHub */}
          <a href="#" className="hover:opacity-70">
            <svg width="22" height="22" fill="currentColor" className="text-gray-700">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.6-4.1-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8a2.3 2.3 0 0 1 .7-1.5c-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.2 4.2 0 0 1 .1-3.1s1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.2 4.2 0 0 1 .1 3.1 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6a2.6 2.6 0 0 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:opacity-70">
            <svg width="22" height="22" fill="currentColor" className="text-gray-700">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0Zm.02 4H0v14h5V7.5Zm7.48 0h-4.9v14h5v-7.4c0-3.9 5-4.2 5 0V21.5h5V12.7c0-8.4-9.6-8-10.1-3.9V7.5Z"/>
            </svg>
          </a>

          {/* Twitter / X */}
          <a href="#" className="hover:opacity-70">
            <svg width="22" height="22" fill="currentColor" className="text-gray-700">
              <path d="M21.5 2.3 13.8 12l8 9.7h-4.8l-5.5-6.7-5.5 6.7H1.1l8-9.7-7.7-9.7h4.8l5.1 6.2 5.2-6.2h4.8Z"/>
            </svg>
          </a>
        </div>

        {/* Aim Tagline */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700 font-medium">
            Our Aim: To empower people with air quality awareness and build meaningful solutions.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 mt-3">
          © {new Date().getFullYear()} AQI Intelligence
        </div>
      </div>
    </footer>
  );
}
