import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TradeOnMobile from "./components/TradeOnMobile";
import CopyTopInvestors from "./components/CopyTopInvestors";
import Sponsor from "./components/Sponsor";
// import GlobalMarkets from "./components/GlobalMarkets";

function App() {

  return (
    <div className="px-4">
      <Navbar />
      {/* <GlobalMarkets /> */}
      <TradeOnMobile />
      <CopyTopInvestors />
      <Sponsor />
      <Footer/>
    </div>
  )
}

export default App
