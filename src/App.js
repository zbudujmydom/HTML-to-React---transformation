import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import LandingPage from "./components/Land/LandingPage.js";
import About from "./components/About/About.js";
import Offers from "./components/Offers/Offers.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
