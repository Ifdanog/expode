import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Services from "./components/Services";
import GlobalMarkets from "./components/GlobalMarkets";
import TradeOnMobile from "./components/TradeOnMobile";
import CopyTopInvestors from "./components/CopyTopInvestors";
import Sponsor from "./components/Sponsor";
import Hero from "./components/Hero";

function App() {  
 useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  }, []);

  return (
    <div className="px-0 md:px-4">
      <div className="custom-cursor"></div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <GlobalMarkets />
      <TradeOnMobile />
      <CopyTopInvestors />
      <Sponsor />
      <Footer/>
    </div>
  )
}

export default App
