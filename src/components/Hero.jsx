import we from '../assets/we.mp4'

const Hero = () => {
  return (
    <>
    <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={we} type="video/mp4" />
            {/* Add additional source elements for other video formats if needed */}
          </video>
        </div>
    <div className="relative w-[80%] mx-auto h-screen overflow-hidden">
      <div className="relative z-1 h-full">
        <div className="flex flex-col justify-center h-full relative z-1 text-center md:text-left">
          <div className="mx-auto md:mx-0 text-white">
            <h1 className='w-4/5 text-4xl md:text-6xl inter font-black pb-8'>Expode <br /> Your Shield Partner in Trading.</h1>
            <p className='w-4/5 text-sm md:text-normal'>Safeguarding Your Investments.</p>
            <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
              <span className='text-sm'>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;