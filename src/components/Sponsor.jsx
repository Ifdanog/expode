import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'
import Logo4 from '../assets/Logo4.png'
import Logo5 from '../assets/Logo5.png'
import Logo6 from '../assets/Logo6.png'
import Logo7 from '../assets/Logo7.png'
import Logo8 from '../assets/Logo8.png'

const Sponsor = () => {
  return (
    <div className='w-full py-20'>
      <h1 className='borna text-4xl text-center py-10'>Sponsor of your Favorite teams</h1>
      <div className="flex justify-between xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto bg-white">
        <img src={Logo8} alt="" />
        <img src={Logo7} alt="" />
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
        <img src={Logo6} alt="" />
      </div>
    </div>
  )
}

export default Sponsor