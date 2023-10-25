import video from '../assets/vid1.mp4'
import ArrowRight from '../assets/arrow-right.svg'
import scroll from '../assets/Mouse Scroll.svg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden video-container">
        <video autoPlay muted loop id="background-video" className='absolute top-0 left-0 w-full h-full object-cover -z-1'>
            <source src={video} type="video/mp4" />
        </video>
        <div className="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto py-20 ml-28 relative z-1 text-white">
            <h1 className='w-1/2 text-6xl borna py-10'>Your gateway to smart investing and trading.</h1>
            <p className='w-1/2'>Expode is your all-in-one trading platform designed for both beginners and seasoned investors.</p>
            <button className='bg-[#1d2123] py-4 px-8 mt-10 text-white group rounded-md'>
                <span className='text-sm'>Get Started</span>
                <img src={ArrowRight} alt="" className='inline h-4 ml-2 group-hover:ml-3'/>
            </button>
            <div className="flex gap-4 mt-10 items-center">
                <img src={scroll} alt="" className='' />
                <p>Scroll</p>
            </div>
        </div>
    </div>
  )
}

export default Hero