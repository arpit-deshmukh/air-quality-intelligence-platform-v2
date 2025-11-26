import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-300 border-t border-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            AQI Intelligence
          </h2>
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

        {/* -------------------------------------------- */}

        {/* social icons */}

        <div className="flex gap-5 mt-2">
          {/* GitHub */}
          <a
            href="https://github.com/arpit-deshmukh" // <-- replace here
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <GitHubIcon className="text-gray-700" fontSize="medium" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/" //
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <LinkedInIcon className="text-blue-700" fontSize="medium" />
          </a>

          {/* Email */}

          {/* <a 
  href="mailto:arpit@gmail.com"
  className="flex items-center gap-2 hover:opacity-75"
>
  <MailIcon className="text-gray-700" fontSize="medium" />
  <span className="text-gray-700">arpitdeshmukh21@gmail.com</span>
</a> */}
        </div>

        {/* -------------------------------------------------------------------------- */}

        {/* ------------------------------------------------------------------------------- */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700 font-medium">
            Our Aim: To empower people with air quality awareness and build
            meaningful solutions.
          </p>
        </div>

        {/* -------------------------------------------------------------------------------------- */}
        {/* //copyright */}
        <div className="text-sm text-gray-500 mt-3">
          © {new Date().getFullYear()} AQI Intelligence
        </div>
      </div>
    </footer>
  );
}
