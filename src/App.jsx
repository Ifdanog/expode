import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Services from "./components/Services";
import GlobalMarkets from "./components/GlobalMarkets";
import TradeOnMobile from "./components/TradeOnMobile";
import CopyTopInvestors from "./components/CopyTopInvestors";
import Sponsor from "./components/Sponsor";

function App() {

  return (
    <div className="px-0 md:px-4">
      <Navbar />
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
