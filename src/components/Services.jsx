import ArrowRight from '../assets/arrow-right.svg'

const Services = () => {
  return (
    <div className='bg-[#F7F7F7] py-20'>
        <div className="w-[80%] md:w-[30%] mx-auto text-center">
            <h1 className='text-2xl borna'>One service, all platforms</h1>
            <p className='text-[#5A5A5D] text-xs py-6'>We're proud to offer you unified experience - one service, availableon all platforms. Whether you're on your desktop, smartphone, or tablet, we've got you covered.</p>
        </div>
        <div className="w-[60%] grid grid-cols-2 gap-x-[5rem] gap-y-[4rem] mx-auto">
            <div>
                <span className='text-xs'><b>Real-Time Market.</b>Data Access up-to-the-minute market data. live price quotes, and in-depth charts to make informed decisions.</span>
            </div>
            <div>
                <span className='text-xs'><b>Advanced Charting.</b>Utilize advancing charting tools with customizable indicators, patterns, and timeframes for comprehensive technical analysis.</span>
            </div>
            <div>
                <span className='text-xs'><b>One-Click Trading.</b>Execute order swiftly with one-click trading, reducing latency and ensuring you don't mis crucial market movements.</span>
            </div>
            <div>
                <span className='text-xs'><b>News and Alerts.</b>Stay informed with real-time news feeds and customizable alerts to react swiftly to market events.</span>
            </div>
        </div>
        <div className="text-center mt-20">
            <button className='bg-[#1d2123] py-4 px-8 text-white group rounded-md mx-auto'>
                <span className='text-sm'>Start Trading Now</span>
                <img src={ArrowRight} alt="" className='inline h-4 ml-2 group-hover:ml-3'/>
            </button>
        </div>
    </div>
  )
}

export default Services