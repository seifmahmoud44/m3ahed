import Navbar from "./components/navbar/Navbar";
import Pricing from "./pages/services/Services";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Route, Routes } from "react-router-dom";
import News from "./pages/news/News";
import Librarie from "./pages/librarie/Librarie";
import Products from "./pages/products/Products";
import Diplomats from "./pages/diplomats/Diplomats";
import Musa from "./pages/musa/Musa";
import CareerGrowth from "./pages/careerGrowth/CareerGrowth";
import NewaDetales from "./pages/newsDetales/NewsDetales";

import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/librarie" element={<Librarie />} />
        <Route path="/products" element={<Products />} />
        <Route path="/diplomats" element={<Diplomats />} />
        <Route path="/musa" element={<Musa />} />
        <Route path="/careerGrowth" element={<CareerGrowth />} />
        <Route path="/newaDetales" element={<NewaDetales />} />
        <Route path="/news/:name" element={<NewaDetales />} />{" "}
      </Routes>
    </>
  );
}

export default App;
