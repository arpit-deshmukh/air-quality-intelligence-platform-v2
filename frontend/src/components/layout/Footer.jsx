import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-300 py-12 anim-fade">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="anim-slide-up">
          <h2 className="text-2xl font-semibold text-white">
            AQI Intelligence
          </h2>
          <p className="text-sm mt-3 text-slate-400 leading-relaxed">
            A platform to understand air quality, explore real-time data,
            and support research-driven environmental decisions.
          </p>
        </div>

        <div className="anim-slide-up">
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/researchPage" className="hover:text-blue-400 transition-all">
                Research
              </a>
            </li>
            <li>
              <a href="/aqi-info" className="hover:text-blue-400 transition-all">
                AQI Info
              </a>
            </li>
            <li>
              <a href="/solutionsPage" className="hover:text-blue-400 transition-all">
                Solutions
              </a>
            </li>
          </ul>
        </div>

        <div className="anim-slide-up">
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Connect
          </h3>
          <div className="flex gap-5">
            <a
              href="https://github.com/arpit-deshmukh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-transform hover:scale-110"
            >
              <GitHubIcon className="text-slate-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-transform hover:scale-110"
            >
              <LinkedInIcon className="text-white" />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400 anim-fade">
        © {new Date().getFullYear()} AQI Intelligence · Built for awareness & impact
      </div>
    </footer>
  );
}
