import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
