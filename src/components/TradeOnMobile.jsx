import phone from '../assets/mobile-phone.png'
import phonep1 from '../assets/mobile-part-1.png'
import phonep2 from '../assets/mobile-part-2.png'
import Tick from '../assets/Vector.svg'

const TradeOnMobile = () => {
  return (
        <div className='block md:flex justify-between w-full bg-[#f8f8f8] gap-10 px-20 py-20'>
            <div className='flex-1'>
            <div className="text-center mx-auto relative" style={{ maxWidth: '90%' }}>
                <div className="absolute inset-0 bg-[#f8f8f8] z-0"></div>
                    <p className='relative z-1 text-xs p-4 text-[#0057ff] font-semibold tracking-widest'>STAY CONNECTED</p>
                    </div>
                    
            <h1 className='w-[95%] text-3xl md:text-5xl md:leading-[3.5rem] inter font-semibold py-4 z-10 text-center md:text-left'>Seamlessly Trade on Mobile, Wherever You Are</h1>
              <p className='text-normal md:text-xl'>Don't miss a beat – trade on both mobile web and our app. Keep your finger on the pulse of the markets, even while on the move.</p>
              <div className='flex md:block'>
                <div className='w-full mx-auto md:mx-0 flex gap-2'>
                  <img src={Tick} alt="" className='w-4' />
                  <span className='text-normal md:text-xl leading-10'>Mobile Web & App</span>
                </div>
                <div className='w-full mx-auto md:mx-0 flex gap-2'>
                <img src={Tick} alt="" className='w-4' />
                  <span className='text-normal md:text-xl leading-10'>Real-time updates</span>
                </div>
              </div>

              <button className='bg-[blue] block w-2/3 mx-auto md:mx-0 mb-10 md:mb-0 py-4 px-8 mt-8 text-white group'>
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