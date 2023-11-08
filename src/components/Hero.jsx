// import CoinCanvas from './canvas/CoinCanvas'
const Hero = () => {
  return (
    <div className="relative w-[80%] mx-auto h-screen overflow-hidden">
        <div className="flex py-20 relative z-1 text-center md:text-left">
            <div>
              <h1 className='w-4/5 mx-auto md:mx-0 text-4xl md:text-6xl inter font-black pb-8 text-center md:text-left'>Expode <br /> Your Shield Partner in Trading.</h1>
              <p className='w-4/5 mx-auto md:mx-0 text-center md:text-left text-sm md:text-normal'>Safeguarding Your Investments.</p>
              <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                  <span className='text-sm'>Get Started</span>
              </button>
            </div>

            {/* <CoinCanvas /> */}
        </div>
    </div>
  )
}

export default Hero