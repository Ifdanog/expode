import Copy from '../assets/Group 3.png'
import ArrowRight from '../assets/arrow-right.svg'
const CopyTopInvestors = () => {
  return (
    <div className="bg-[#F2F7F7] py-48 rounded-2xl">
        <div className='flex justify-between w-full xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto'>
            <div className='w-[40%]'>
                <h3 className='borna text-2xl font-semibold'>
                    Copy top investors
                </h3>
                <h4 className='w-[55%]'>
                    Your shortcut to success in the financial markets.
                </h4>
                <p className='text-[#5A5A5D] text-sm py-6'>
                    At Expode,we understand that not everyone has the time, expertise, or experience to navigate the complex world of trading and investing. That's why we've introduced our revolutionary 'Copy Top Investors' feature, designed to mamke your journey to financial success as effortless as possible 
                </p>

                <button className='bg-[#1d2123] py-4 px-8 text-white group duration-200 transition rounded-md'>
                    <span className='text-sm'>Start Trading Now</span>
                    <img src={ArrowRight} alt="" className='inline h-4 ml-2 group-hover:ml-3'/>
                </button>

            </div>
            <div className='w-[50%]'>
                <img src={Copy} alt="" />
            </div>
        </div>
    </div>  
  )
}

export default CopyTopInvestors