import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Explore from "./pages/Explore.jsx";
import ExplorePage from "./pages/explore/ExplorePage.jsx";

import Compare from "./pages/compare/Compare.jsx"
import Meta from "./pages/Meta.jsx"
import Analytics from "./pages/Analytics";

import AQIInfo from "./pages/AQIInfo/AQIInfo.jsx";


import Research from "./pages/Research/ResearchPage.jsx";


import Solutions from "./pages/Solutions/SolutionPage.jsx";








import City from "./pages/City";


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<Research />} />

      <Route path="/city/:cityName" element={<City />} />
      <Route path="/analytics" element={<Analytics />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
         <Route path="/explorePage" element={<ExplorePage />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/aqi-info" element={<AQIInfo />} />
        <Route path="/meta" element={<Meta />} />/
        <Route path="/solutions" element={<Solutions />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}





