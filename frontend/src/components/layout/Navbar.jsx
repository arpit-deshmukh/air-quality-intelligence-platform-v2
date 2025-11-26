import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center px-6 py-4 shadow bg-gray-300 ">
      <Link to="/" className="font-bold text-xl">
        AQI Intelligence
      </Link>

      
      <div className="flex gap-6 ml-10">
        <Link to="/explorePage" className="hover:text-blue-600">
          Explore
        </Link>

        <Link to="/comparePage" className="hover:text-blue-600">
          Compare
        </Link>

        <Link to="/aqi-info" className="hover:text-blue-600">
          AQI Info
        </Link>

        <Link to="/research" className="hover:text-blue-600">
          Research
        </Link>

        <Link to="/solutions" className="hover:text-blue-600">
          Solutions
        </Link>
      </div>
      <hr/>
    </nav>
  );
}
