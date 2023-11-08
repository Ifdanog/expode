import Copy from '../assets/Group 3.png'

const CopyTopInvestors = () => {
  return (
    <div className="w-full h-full lg:h-screen bg-register py-10 px-10 md:px-20 flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center">
            <div className="flex-1 justify-center items-center">
                <div className="text-white text-center md:text-left">
                    <h1 className='text-4xl font-semibold py-2'>Get Started Now!</h1>
                    <p className='text-normal md:text-xl mt-4'>Reliable, Simple, Innovative. Join millions who have already traded with Margin 1.</p>
                </div>
            </div>
            <div className="flex-1">
                <form className='bg-[#fff] w-full rounded-xl p-10'>
                    <h2 className='font-bold text-3xl text-center pb-10'>Create an account</h2>
                    <input type="text" placeholder='Full Name' className='border border-1 w-full px-4 py-3 rounded-sm' />
                    <input type="email" placeholder='Email' className='border border-1 w-full px-4 py-3 rounded-sm mt-4' />
                    <div className='flex gap-3 mt-4'>
                        <input type="number" placeholder='(+111)' className='flex-1 border border-1 w-full px-4 py-2 rounded-sm' />
                        <input type="number" placeholder='Phone Number' className='flex-0.5 border border-1 w-full px-4 py-2 rounded-sm' />
                    </div>
                    <div className='flex items-start gap-3 mt-6'>
                        <input type="checkbox" className='w-6 h-6' checked />
                        <p className='text-xs md:text-sm'>I agree to Expode Terms of Use and confirm that I am over 18 years of age. Privacy Policy</p>
                    </div>
                    <button className='w-full rounded-md bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                        <span className='text-xs md:text-sm'>Get Started</span>
                    </button>
                    <p className='text-xs md:text-sm mt-6 text-center'>Have an account? <a href="#">Login</a></p>
                    <p className='text-xs md:text-sm mt-4 text-center text-[#ddd]'>All trading involves risk. Only risk capital you're prepared to lose.</p>
                </form>
            </div>
        </div>
    </div>  
  )
}

export default CopyTopInvestors