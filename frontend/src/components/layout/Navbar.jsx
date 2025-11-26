import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 px-6 py-4 shadow">
      <Link to="/" className="font-bold text-xl">AQI Intelligence</Link>

      <div className="flex gap-4">
    
        <Link to="/explore" className="hover:text-blue-600">Explore</Link>
        <Link to="/explorePage" className="hover:text-blue-600">Explore</Link>

        
        <Link to="/compare" className="hover:text-blue-600">Compare</Link>
        <Link to="/comparePage" className="hover:text-blue-600">ComparePage</Link>


        <Link to="/info" className="hover:text-blue-600">AQI Info</Link>
        <Link to="/analytics" className="hover:text-blue-600">Analytics</Link>
      <Link to="/aqi-info" className="hover:text-blue-600">AQI Info</Link>

<Link to="/research" className="hover:text-blue-600">Research</Link>

        <Link to="/solutions" className="hover:text-blue-600">Solutions</Link>


      </div>
    </nav>
  );
}
