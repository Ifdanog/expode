import Phone1 from '../assets/Frame 38.png'
import Phone2 from '../assets/Frame 39.png'
import AppStore from '../assets/badge-app-store-dark.svg'
import GooglePlay from '../assets/badge-google-play-dark.svg'
import Tick from '../assets/Vector.svg'

const TradeOnMobile = () => {
  return (
        <div className='block md:flex justify-between w-full bg-[#f8f8f8] gap-10 px-20'>
            <div className='w-[90%] mx-auto md:w-[40%] mt-10'>
            <p className='w-[20%] md:w-full text-center md:text-left mx-auto text-xs py-6'>STAY CONNECTED</p>
            <h1 className='text-4xl inter font-semibold py-4'>Empowering Traders for Success.</h1>
              <p className='text-xl'>Don't miss a beat – trade on both mobile web and our app. Keep your finger on the pulse of the markets, even while on the move.</p>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
                <img src={Tick} alt="" className='w-4' />
                <span className='text-xl leading-10'>Mobile Web & App</span>
              </div>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
              <img src={Tick} alt="" className='w-4' />
                <span className='text-xl leading-10'>Real-time updates</span>
              </div>

              <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                <span className='text-sm'>Get Started</span>
            </button>
            </div>
            <div className="relative w-[90%] mx-auto">
            </div>
        </div>
  )
}

export default TradeOnMobile