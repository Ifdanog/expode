import { useState } from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const [ showNav, setShowNav ] = useState(false)

  return (
    <header className='flex justify-between w-full py-2 h-14 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto bg-white gap-10'>
        <img src={Logo} alt="" className='h-10' />
        <nav className='hidden md:flex justify-between w-full'>
            <ul className='flex gap-4'>
                <li>
                    <a href=""  className='text-sm leading-10'>Markets</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>Tools</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>Pricing</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>Company</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>Partner with us</a>
                </li>
            </ul>
            <ul className='flex gap-4'>
                <li>
                    <a href="" className='text-sm leading-10 borna'>EN</a>
                </li>
                <li>
                    <button className='bg-[#FFF] rounded-full text-xs border-2 px-6 py-2 borna'>Login</button>
                </li>
                <li>
                    <button className='bg-[#1D2123] rounded-full text-xs px-6 py-2 text-[#FFF] borna'>Register</button>
                </li>
            </ul>
        </nav>

        {showNav && (
            <nav className='absolute right-0 top-14 w-[70%] h-screen pr-4 pl-14 py-4 text-white bg-black z-50'>
            <ul className=''>
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
            <ul className=''>
            <li>
                <a href="" className='text-xl leading-10 borna'>EN</a>
            </li>
            <li>
                <button className='bg-[#FFF] text-[#000] rounded-full border-2 px-6 py-2 borna'>Login</button>
            </li>
            <li>
                <button className='bg-[#1D2123] rounded-full mt-4 px-6 py-2 text-[#000] borna'>Register</button>
            </li>
        </ul>
        </nav>
        )}

    <p onClick={() => setShowNav(!showNav)} className='md:hidden cursor-pointer'>menu</p>
    </header>
  )
}

export default Navbar