import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Travel from "./page/Travel/Travel.jsx";
import Food from "./page/Food/Food.jsx";
import Opinion from "./page/Opinion/Opinion.jsx";
import Life from "./page/Life/Life.jsx";
import Design from "./page/Design/Design.jsx";
import Techhnology from "./page/Technology/Techhnology.jsx";
import About from "./page/About/About.jsx";
import ScrollTop from "./components/ScrollTop/ScrollTop.js";
import Contact from "./page/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/food" element={<Food />} />
            <Route path="/opinion" element={<Opinion />} />
            <Route path="/life" element={<Life />} />
            <Route path="/design" element={<Design />} />
            <Route path="/technology" element={<Techhnology />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ScrollTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
