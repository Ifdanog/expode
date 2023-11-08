import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Services from "../components/Services";
import GlobalMarkets from "../components/GlobalMarkets";
import TradeOnMobile from "../components/TradeOnMobile";
import CopyTopInvestors from "../components/CopyTopInvestors";
import Hero from "../components/Hero";

function App() {  
  const [ripples, setRipples] = useState([]);
  const rippleCounter = useRef(0);

  useEffect(() => {
    const addRipple = (e) => {
      const rippleContainer = document.querySelector('.ripple-container');
      if (rippleContainer) {
        const rect = rippleContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = {
          x,
          y,
          id: rippleCounter.current,
        };

        setRipples((prevRipples) => [...prevRipples, newRipple]);
        rippleCounter.current += 1;

        setTimeout(() => {
          setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
        }, 1000);
      }
    };

    document.addEventListener('mousemove', addRipple);

    return () => {
      document.removeEventListener('mousemove', addRipple);
    };
  }, []);


  return (
    <div className="px-0 md:px-4">
      {/* <div className="relative-container">
      <div className="ripple-container">
      <span
            style={{
              top: '50%',
              left: '50%',
            }}
            className="ripple"
          ></span>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              top: ripple.y,
              left: ripple.x,
            }}
            className="ripple"
          ></span>
        ))}
      </div>
    </div> */}
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <TradeOnMobile />
      <GlobalMarkets />
      <CopyTopInvestors />
      <Footer/>
    </div>
  )
}

export default App
