import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Promo from "./pages/Promo";
import Merchandise from "./pages/Merchandise";
import Stores from "./pages/Stores";
import LimitedEdition from "./pages/LimitedEdition";
import DonutTower from "./pages/DonutTower";
import Gift from "./pages/Gift";
import Beverages from "./pages/Beverages";
import PotatoDonuts from "./pages/PotatoDonuts";
import FilledDonuts from "./pages/FilledDonuts";
import BarDonuts from "./pages/BarDonuts";
import Packaging from "./pages/Packaging";
import Holiday from "./pages/Holiday";
import NewsDetail from "./pages/NewsDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="promo" element={<Promo />} />
          <Route path="merchandise" element={<Merchandise />} />
          <Route path="stores" element={<Stores />} />
          <Route path="donuts/tower" element={<DonutTower />} />
          <Route path="gift" element={<Gift />} />
          <Route path="beverages" element={<Beverages />} />
          <Route path="donuts/potato" element={<PotatoDonuts />} />
          <Route path="donuts/filled" element={<FilledDonuts />} />
          <Route path="donuts/bar" element={<BarDonuts />} />
          <Route path="donuts/limited" element={<LimitedEdition />} />
          <Route path="donuts/packaging" element={<Packaging/>} />
          <Route path="/news/:slug" element={<NewsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
