import Discovertcsdiff from "./Components/Discovertcsdiff";
import Footer from "./Components/Footer";
import FooterBase from "./Components/FooterBase";
import HeroSection from "./Components/HeroSection";
import HomePgAbout from "./Components/HomePgAbout";
import Insights from "./Components/Insights";
import Navbar from "./Components/Navbar";
import Snapshot from "./Components/Snapshot";
import Overview from "./Components/Overview/Index"

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Snapshot />
              <Insights />
              <Discovertcsdiff />
              <HomePgAbout />
            </>
          }></Route>
          <Route path="overview" element={ 
            <Overview />
          }></Route>
        </Routes>
        <Footer />
        <FooterBase />
      </Router>
    </>
  );
}

export default App;
