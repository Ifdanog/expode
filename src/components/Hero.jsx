import video from '../assets/we.mp4'
import ArrowRight from '../assets/arrow-right.svg'
import scroll from '../assets/Mouse Scroll.svg'
import CoinCanvas from './canvas/CoinCanvas'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <div className="flex w-[95%] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-20 relative z-1 text-center md:text-left">
            <div>
              <h1 className='w-4/5 mx-auto md:mx-0 text-4xl md:text-6xl borna py-10 text-center md:text-left'>Your gateway to smart investing and trading.</h1>
              <p className='w-4/5 mx-auto md:mx-0 text-center md:text-left text-sm md:text-normal'>Expode is your all-in-one trading platform designed for both beginners and seasoned investors.</p>
              <button className='bg-[#1d2123] py-4 px-8 mt-1 text-white group rounded-md'>
                  <span className='text-sm'>Get Started</span>
                  <img src={ArrowRight} alt="" className='inline h-4 ml-2 group-hover:ml-3'/>
              </button>
              <div className="flex gap-4 mt-10 justify-center md:justify-normal items-center">
                  <img src={scroll} alt="" className='' />
                  <p>Scroll</p>
              </div>
            </div>

            {/* <CoinCanvas /> */}
        </div>
    </div>
  )
}

export default Hero