import Apple from '../assets/badge-app-store.svg'
import GooglePlay from '../assets/badge-google-play.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/X.svg'
import Instagram from '../assets/Instagram.svg'
import LinkedIn from '../assets/linkedin.svg'
import Youtube from '../assets/Youtube.svg'

const Footer = () => {
  return (
    <footer className='bg-[#F7F7F7] px-4 xl:px-0 py-10 md:pt-20 pb-10 rounded-none md:rounded-2xl'>
      <div className="xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        <div>
          <h3 className='font-bold text-gray-800'>Top Instruments</h3>
          <ul className='text-[#5A5A5D] text-xs'>
            <li className='leading-7'><a>Bitcoin (BTC)</a></li>
            <li className='leading-7'><a>Ethereum (ETH)</a></li>
            <li className='leading-7'><a>Shiba (in Millions)</a></li>
            <li className='leading-7'><a>Tesla</a></li>
            <li className='leading-7'><a>Apple</a></li>
            <li className='leading-7'><a>Nio</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-gray-800'>Support</h3>
          <ul className='text-[#5A5A5D] text-xs'>
            <li className='leading-7'><a>Help Center</a></li>
            <li className='leading-7'><a>How to deposit</a></li>
            <li className='leading-7'><a>How to withdraw</a></li>
            <li className='leading-7'><a>How to open an account</a></li>
            <li className='leading-7'><a>How to verify your account</a></li>
            <li className='leading-7'><a>Caent vulnerability</a></li>
          </ul>
        </div><div>
          <h3 className='font-bold text-gray-800'>Learn more</h3>
          <ul className='text-[#5A5A5D] text-xs'>
            <li className='leading-7'><a>How copy trading works?</a></li>
            <li className='leading-7'><a>Responsible trading?</a></li>
            <li className='leading-7'><a>What is leverage & margin?</a></li>
            <li className='leading-7'><a>Buy and sell explained</a></li>
            <li className='leading-7'><a>Market research</a></li>
            <li className='leading-7'><a>Tax report</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-gray-800'>About Us</h3>
          <ul className='text-[#5A5A5D] text-xs'>
            <li className='leading-7'><a>Why choose Expode</a></li>
            <li className='leading-7'><a>Expode reviews</a></li>
            <li className='leading-7'><a>Careers</a></li>
            <li className='leading-7'><a>Our offices</a></li>
            <li className='leading-7'><a>Accessbiity</a></li>
            <li className='leading-7'><a>Imprint</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-gray-800'>Privacy and Regulation</h3>
          <ul className='text-[#5A5A5D] text-xs'>
            <li className='leading-7'><a>Expode Cookie Policy</a></li>
            <li className='leading-7'><a>Privacy Policy</a></li>
            <li className='leading-7'><a>Regulation & license</a></li>
            <li className='leading-7'><a>Genral Risk Disclosure</a></li>
            <li className='leading-7'><a>Terms & Conditions</a></li>
            <li className='leading-7'><a>Key information Documents</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-gray-800'>Partner and Promotions</h3>
          <ul className='text-[#5A5A5D] text-xs'>
            <li className='leading-7'><a>Invite a friend</a></li>
            <li className='leading-7'><a>Affiaate Program</a></li>
            <li className='leading-7'><a>Expode Club</a></li>
            <li className='leading-7'><a>Investment insurance</a></li>
            <li className='leading-7'><a>Partner smart portfolios</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-gray-800'>Download our App</h3>
          <div className='flex gap-6'>
            <img src={Apple} alt="" className='w-36 md:w-48 cursor-pointer' />
            <img src={GooglePlay} alt="" className='w-36 md:w-48 cursor-pointer' />
          </div>
        </div>
      </div>
      <hr className='my-14' />
      <div className="w-[470px] flex gap-8 text-center mx-auto">
        <h2 className='font-bold leading-10 borna'>Follow Us</h2>
        <div className="flex flex-wrap gap-8">
          <img src={Facebook} alt="" className='cursor-pointer' />
          <img src={Twitter} alt="" className='cursor-pointer' />
          <img src={Instagram} alt="" className='cursor-pointer' />
          <img src={LinkedIn} alt="" className='cursor-pointer' />
          <img src={Youtube} alt="" className='cursor-pointer' />
        </div>
      </div>

      <div className='text-[#5A5A5D] pt-20 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto text-xs leading-7'>
        <p>Expode Ltd., a Financial Services Company authorised and regulated by the Cyprus Securities Exchange Commission (CySEC) under the license # 109/10. Registered in Cyprus under Company No. HE 200585. Registered Office: 4 Profiti Ilia Str., Kanika Business Centre, 7th floor, Germasogeia, 4046, Limassol, Cyprus.Expode (UK) Ltd, a Financial Services Company authorised and regulated by the Financial Conduct Authority (FCA) under the license FRN 583263.Registered Office: 24th floor, One Canada Square, Canary Wharf, London E14 5AB.Expode AUS Capital Limited is authorised by the Australian Securities and Investments Commission (ASIC) to provide financial services under Australian Financial Services License 491139.Registered Office: Level 3, 60 Castlereagh Street, Sydney NSW 2000, Australia.Expode (Seychelles) Ltd. is licenced by the Financial Services Authority Seychelles ("FSAS") to provide broker-dealer services under the Securities Act 2007 License #SD076Registered Office: Expode Suites, S45 2nd Floor, Espace Building, Victoria, Seychelles.</p>

        <p className='my-10'>Past performance is not an indication of future results <br />
        <span className='text-[blue]'>General Risk Disclosure | Terms & Conditions</span></p>

        <p>You should seek advice from an independent and suitably licensed financial advisor and ensure that you have the risk appetite, relevant experience and knowledge before you decide to trade. Under no circumstances shall Expode have any liability to any person or entity for any direct, indirect, special, consequential or incidental damages whatsoever. Cryptocurrencies markets are unregulated services which are not governed by any specific European regulatory framework (including MiFID). Therefore when using our Cryptocurrencies Trading Service you will not benefit from the protections available to clients receiving MiFID regulated investment services, such as access to the Cyprus Investor Compensation Fund (ICF)/the Financial Services Compensation Scheme (FSCS) and the Financial Ombudsman Service for dispute resolution. Trading with eToro by following and/or copying or replicating the trades of other traders involves a high level of risks, even when following and/or copying or replicating the top-performing traders. Such risks includes the risk that you may be following/copying the trading decisions of possibly inexperienced/unprofessional traders, or traders whose ultimate purpose or intention, or financial status may differ from yours. Past performance of an Expode Community Member is not a reliable indicator of his future performance. Content on Expode's social trading platform is generated by members of its community and does not contain advice or recommendations by or on behalf of Expode - Your Social Investment Network.</p>
      </div>

      <hr className='my-14' />

      <p className='text-[#5A5A5D] text-xs text-center'>Copyright &copy; 2006-2023 Expode. All rights reserved.</p>
    </footer>
  )
}

export default Footer