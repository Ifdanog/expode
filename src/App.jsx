import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TradeOnMobile from "./components/TradeOnMobile";
import CopyTopInvestors from "./components/CopyTopInvestors";
import Sponsor from "./components/Sponsor";
import GlobalMarkets from "./components/GlobalMarkets";

function App() {

  return (
    <>
      <Navbar />
      <GlobalMarkets />
      <TradeOnMobile />
      <CopyTopInvestors />
      <Sponsor />
      <Footer/>
    </>
  )
}

export default App
