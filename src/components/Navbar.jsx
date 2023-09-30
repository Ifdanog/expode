import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header className='flex justify-between w-full py-2 h-14 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto bg-white'>
        <div className='flex gap-10'>
        <img src={Logo} alt="" className='h-10' />
        <nav className='flex'>
            <ul className='flex gap-4'>
                <li>
                    <a href=""  className='leading-10'>Markets</a>
                </li>
                <li>
                    <a href="" className='leading-10'>Tools</a>
                </li>
                <li>
                    <a href="" className='leading-10'>Pricing</a>
                </li>
                <li>
                    <a href="" className='leading-10'>Company</a>
                </li>
                <li>
                    <a href="" className='leading-10'>Partner with us</a>
                </li>
            </ul>
        </nav>
        </div>
    <ul className='flex gap-4'>
            <li>
                <a href="" className='text-xl leading-10 borna'>EN</a>
            </li>
            <li>
                <button className='bg-[#FFF] rounded-full border-2 px-6 py-2 borna'>Login</button>
            </li>
            <li>
                <button className='bg-[#1D2123] rounded-full px-6 py-2 text-[#FFF] borna'>Register</button>
            </li>
        </ul>
    </header>
  )
}

export default Navbar