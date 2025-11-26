import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ExplorePage from "./pages/explore/ExplorePage.jsx";

import ComparePage from "./pages/compare/ComparePage.jsx";
import Meta from "./pages/Meta.jsx";
import Analytics from "./pages/Analytics.jsx";

import AQIInfo from "./pages/aqiInfo/AQIInfo.jsx";
import Research from "./pages/Research/ResearchPage.jsx";
import Solutions from "./pages/solutions/SolutionPage.jsx";

import City from "./pages/City.jsx";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/explorePage" element={<ExplorePage />} />
        <Route path="/comparePage" element={<ComparePage />} />

        <Route path="/city/:cityName" element={<City />} />

        <Route path="/analytics" element={<Analytics />} />
        <Route path="/aqi-info" element={<AQIInfo />} />
        <Route path="/research" element={<Research />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/meta" element={<Meta />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
