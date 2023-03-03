
import Footer from "./Components/Footer";
import FooterBase from "./Components/FooterBase";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview/Index"
import HomePage from "./Components/HomePage/Index"
import Banking from "./Components/Banking/Index"

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
          <Route path="/" element={ <HomePage/>}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/industries/banking" element={<Banking/>}></Route>
        </Routes>
        <Footer />
        <FooterBase />
      </Router>
    </>
  );
}

export default App;
