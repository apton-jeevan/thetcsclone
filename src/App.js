import Discovertcsdiff from "./Components/Discovertcsdiff";
import Footer from "./Components/Footer";
import FooterBase from "./Components/FooterBase";
import HeroSection from "./Components/HeroSection";
import HomePgAbout from "./Components/HomePgAbout";
import Insights from "./Components/Insights";
import Navbar from "./Components/Navbar";
import Snapshot from "./Components/Snapshot";

function App() {
  return (
    <>
    <Navbar/> 
    <HeroSection/>
   <Snapshot/>
  <Insights/>
    <Discovertcsdiff/>  
      <HomePgAbout />
      <Footer />
      <FooterBase />
    </>
  );
}

export default App;
