import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/quvonch/home";
import About from "./pages/quvonch/about";
import Basket from "./pages/quvonch/basket";
import Catalog from "./pages/sarvar/catalog";
import CatalogDetail from "./pages/sarvar/catalog-detail";
import News from "./pages/siroj/news";
import NewsDetail from "./pages/siroj/news-detail";
import Contact from "./pages/siroj/contact";
import Diller from "./pages/siroj/diller";


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manufacturer/:id" element={<Diller />} />
      </Routes>

      <Footer />
    </div>
  )
}
