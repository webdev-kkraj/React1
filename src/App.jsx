import react from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/style.css";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/common/header/Header";
import Footer from "./components/common/header/footer";
import Team from "./components/team/Team";
import Singleteam from "./components/team/Singleteam";
import Journal from "./components/journal/Journal";
import About from "./components/about/About";
import Notfound from "./components/not_found/Notfound";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:sid" element={<Singleteam />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
