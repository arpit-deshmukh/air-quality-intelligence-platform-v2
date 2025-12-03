import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-1 text shadow bg-gray-400 sticky top-0">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 font-bold text-xl">
        <img src="/images/logo_3.png" alt="logo" className="w-16 h-16 object-contain" />
        
      </Link>

      {/* Navigation */}
      <div className="flex gap-10 pr-20"> 
        <Link to="/" className="hover:text-blue-600">Home</Link>
       
        <Link to="/researchPage" className="hover:text-blue-600">Research</Link>
        
         <Link to="/aqi-info" className="hover:text-blue-600">AQI Info</Link>
         <Link to="/solutionsPage" className="hover:text-blue-600">Solutions</Link>
        <Link to="/explorePage" className="hover:text-blue-600">Explore</Link>
      </div>
    </nav>
  );
}
