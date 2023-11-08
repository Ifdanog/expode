import Logo from '../assets/Logo.png'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/X.svg'
import LinkedIn from '../assets/linkedin.svg'
import Youtube from '../assets/Youtube.svg'

const Footer = () => {
  return (
    <footer className='px-4 xl:px-0 py-10'>
      <div className='xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto text-xs leading-7'>
        <img src={Logo} alt="" className='h-10 mb-4' />
        <p>CFD trading is a high-risk investment process and is not suitable for all investors. All information provided on this website is for general purposes only and has been prepared without taking into account your personal objectives, financial situation or individual needs. Before deciding to trade CFDs offered through expode.com, you should carefully consider your objectives, financial situation, needs and level of experience, and should consider seeking independent professional advice. By trading, you may incur losses that include part or all of your invested capital, so you should not trade with capital that you cannot afford to lose. You should be aware of all the risks associated with margin trading. We highly recommend reading the full text.</p>
      </div>

      <div className='flex flex-wrap gap-6 md:gap-0 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto justify-between mt-10'>
        <p className='text-sm md:text-normal'>Copyright &copy; 2023 Expode</p>
        <div className='flex gap-3'>
          <img src={Facebook} alt="" className='h-6' />
          <img src={Twitter} alt="" className='h-6' />
          <img src={LinkedIn} alt="" className='h-6' />
          <img src={Youtube} alt="" className='h-6' />
        </div>
        <ul className='flex gap-4'>
          <li  className='text-sm md:text-normal'>Privacy Policy</li>
          <li  className='text-sm md:text-normal'>Terms & Conditions</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer