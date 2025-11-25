import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Explore from "./pages/Explore.jsx";
import Compare from "./pages/Compare.jsx"
import Meta from "./pages/Meta.jsx"
import Analytics from "./pages/Analytics";

import City from "./pages/City";


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
      <Route path="/city/:cityName" element={<City />} />
      <Route path="/analytics" element={<Analytics />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/meta" element={<Meta />} />/
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}





