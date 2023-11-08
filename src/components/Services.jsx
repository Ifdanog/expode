
const Services = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row py-20">
            <div className="flex-1"></div>
            <div className="w-4/5 md:w-full mx-auto flex-1">
              <div className="text-center mx-auto relative" style={{ maxWidth: '60%' }}>
                  <div className="absolute inset-0 bg-[#f8f8f8] z-0"></div>
                      <p className='relative z-1 text-xs p-4 text-[#0057ff] font-semibold tracking-widest'>EXPODE ADVANTAGE</p>
                  </div>
                <h1 className='text-2xl md:text-4xl inter font-semibold py-4'>Empowering Traders for Success.</h1>
                <p className="text-normal md:text-xl pb-4">
                  Expode opens doors to a world of trading opportunities. Let your potential soar as you explore diverse markets with our platform.
                </p>
                <p className="text-normal md:text-xl pb-4">
                Achieve precision in your CFD trading endeavors with Expode's powerful tools. Make informed decisions and seize every trading moment.
                </p>
                <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                    <span className='text-sm'>Get Started</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Services