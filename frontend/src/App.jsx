import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ExplorePage from "./pages/explore/ExplorePage.jsx";

import ComparePage from "./pages/compare/ComparePage.jsx";
import Meta from "./pages/Meta.jsx";
import Analytics from "./pages/Analytics.jsx";

import AQIInfoPage from "./pages/AQIInfo/AQIInfoPage.jsx";
import ResearchPage from "./pages/Research/ResearchPage.jsx";
import SolutionsPage from "./pages/solutions/SolutionPage.jsx";

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
        <Route path="/aqi-info" element={<AQIInfoPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/meta" element={<Meta />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
