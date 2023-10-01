import Phone1 from '../assets/Frame 38.png'
import Phone2 from '../assets/Frame 39.png'
import AppStore from '../assets/badge-app-store-dark.svg'
import GooglePlay from '../assets/badge-google-play-dark.svg'
import Tick from '../assets/Vector.svg'

const TradeOnMobile = () => {
  return (
    <div className="pt-20 pb-10 md:pb-0">
        <div className="text-center borna w-[80%] md:w-[30%] mx-auto">
            <h2 className='text-2xl font-semibold'>Trade on Mobile</h2>
            <h4>Power and precision in the palm of your hand.</h4>
            <p className='text-gray-500 text-xs py-4'>
            With our cutting-edge mobile trading platform, you have the power to trade and manage your investments from anywhere at any time.
            </p>
        </div>
        <div className='block md:flex justify-between w-full xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto gap-10'>
            <div className="relative w-[90%] mx-auto">
              <img src={Phone1} alt="" className='relative z-10 w-[15rem] md:w-[23rem]' />
              <img src={Phone2} alt="" className='absolute top-0 left-[37%] z-0 w-[15rem] md:w-[23rem]' />
            </div>
            <div className='w-[90%] mx-auto md:w-[40%] mt-10'>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
                <img src={Tick} alt="" className='w-4' />
                <span className='text-xs leading-10'>Intuitive Interface</span>
              </div>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
              <img src={Tick} alt="" className='w-4' />
                <span className='text-xs leading-10'>Advanced Charting</span>
              </div>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
              <img src={Tick} alt="" className='w-4' />
                <span className='text-xs leading-10'>Secure Transactions</span>
              </div>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
              <img src={Tick} alt="" className='w-4' />
                <span className='text-xs leading-10'>Portfolio Management</span>
              </div>
              <div className='w-[35%] mx-auto md:w-full md:mx-0 flex gap-2'>
              <img src={Tick} alt="" className='w-4' />
                <span className='text-xs leading-10'>Order Execution</span>
              </div>

              <div className="w-[45%] mx-auto md:w-full md:mx-0  mt-10">
                <p className='text-[10px] text-center md:text-left'>Available on iOS and Android devices.</p>
                <img src={AppStore} alt="" className='w-48 cursor-pointer' />
                <img src={GooglePlay} alt="" className='w-48 cursor-pointer mt-4' />
              </div>
            </div>
        </div>
    </div> 
  )
}

export default TradeOnMobile