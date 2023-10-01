import UserGrowth from '../assets/User Growth.svg'
import CustomerSatisfaction from '../assets/Customer Satisfaction.svg'
import GlobalReach from '../assets/Global Reach.svg'
import PerformanceMetrics from '../assets/Performance Metrics.svg'
import ArrowRight from '../assets/arrow-right.svg'

const Features = () => {
  return (
    <div className='py-20'>
        <div className="w-[80%] md:w-[30%] mx-auto text-center">
            <h1 className='text-2xl borna'>Trading platform in MENA area</h1>
            <p className='text-[#5A5A5D] text-xs py-6'>Our commmitment is to not only offer expert guidance and services but also to provide you with the knowledge and data needed to nabigate the complexities of the financial world.</p>
        </div>
        <div className="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-0 py-10">
            <div className='bg-[#F7F7F7] hover:bg-black hover:text-white shadow-lg py-10 px-6 rounded-md transition duration-1000 cursor-pointer'>
                <h4 className='text-xs text-[#5A5A5D]'>User Growth</h4>
                <img src={UserGrowth} className='py-4' />
                <h3 className='borna font-semibold text-xl'>4,800,000+</h3>
                <p className='borna text-sm'>Registered traders on out platform</p>
            </div>
            <div className='bg-[#F7F7F7] hover:bg-black hover:text-white shadow-lg py-10 px-6 rounded-md transition duration-1000 cursor-pointer'>
                <h4 className='text-xs text-[#5A5A5D]'>Customer Satisfaction</h4>
                <img src={CustomerSatisfaction} className='py-4' />
                <h3 className='borna font-semibold text-xl'>98%+</h3>
                <p className='borna text-sm'>of our users report being highly satisfied with our services</p>
            </div>
            <div className='bg-[#F7F7F7] hover:bg-black hover:text-white shadow-lg py-10 px-6 rounded-md transition duration-1000 cursor-pointer'>
                <h4 className='text-xs text-[#5A5A5D]'>Global Reach</h4>
                <img src={GlobalReach} className='py-4' />
                <h3 className='borna font-semibold text-xl'>32</h3>
                <p className='borna text-sm'>Countries trust our platform for their trading and investment needs.</p>
            </div>
            <div className='bg-[#F7F7F7] hover:bg-black hover:text-white shadow-lg py-10 px-6 rounded-md transition duration-1000 cursor-pointer'>
                <h4 className='text-xs text-[#5A5A5D]'>Performance Metrics</h4>
                <img src={PerformanceMetrics} className='py-4' />
                <h3 className='borna font-semibold text-xl'>63%</h3>
                <p className='borna text-sm'>Average annual return for investors using our plaltform.</p>
            </div>
        </div>
        <div className="w-[80%] md:w-[30%] mx-auto text-center">
            <p className='text-[#5A5A5D] text-xs py-6'>Expode is your all-in-one trading platform designed for both beginners and seasoned investors.</p>
            <button className='bg-[#1d2123] py-4 px-8 text-white group rounded-md'>
                    <span className='text-sm'>Register Now</span>
                    <img src={ArrowRight} alt="" className='inline h-4 ml-2 group-hover:ml-3'/>
                </button>
        </div>
    </div>
  )
}

export default Features