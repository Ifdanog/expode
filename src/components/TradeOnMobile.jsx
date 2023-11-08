import phone from '../assets/mobile-phone.png'
import phonep1 from '../assets/mobile-part-1.png'
import phonep2 from '../assets/mobile-part-2.png'
import Tick from '../assets/Vector.svg'

const TradeOnMobile = () => {
  return (
        <div className='block md:flex justify-between w-full bg-[#f8f8f8] gap-10 px-20 py-20'>
            <div className='flex-1'>
            <p className='w-[20%] md:w-full text-center md:text-left mx-auto text-xs py-6 text-[#0057ff] font-semibold tracking-widest'>STAY CONNECTED</p>
            <h1 className='w-[95%] text-5xl leading-[3.5rem] inter font-semibold py-4'>Seamlessly Trade on Mobile, Wherever You Are</h1>
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
            <div className="flex flex-1 justify-center items-center relative">
              <img src={phone} />
              <img src={phonep1} className=' absolute top-[14%] left-0 z-10 shadow-lg rounded-md' />
              <img src={phonep2} className=' absolute bottom-[14%] right-0 z-10 shadow-lg rounded-md' />
            </div>
        </div>
  )
}

export default TradeOnMobile