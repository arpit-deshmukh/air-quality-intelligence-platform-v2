import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore.jsx";
import Compare from "./pages/Compare.jsx"
import Meta from "./pages/Meta.jsx"


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/explore" element={<Explore />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/meta" element={<Meta />} />/
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
