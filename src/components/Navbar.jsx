import { useState } from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const [ showNav, setShowNav ] = useState(false)

  return (
    <header className='flex justify-between w-full py-6 px-20 h-24 items-center mx-auto bg-white gap-10 z-10 fixed'>
        <img src={Logo} alt="" className='h-10' />
        <nav className='hidden md:flex justify-between items-center w-full h-full'>
            <ul className='flex gap-4'>
                <li>
                    <a href=""  className='text-sm leading-10'>ACCOUNTS</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>TRADING</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>EDUCATION</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>COMPANY</a>
                </li>
            </ul>
            <ul className='flex gap-4 h-full items-center'>
                <li>
                    <a href="" className='text-sm leading-10 borna'>AR</a>
                </li>
                <li>
                    <button className='bg-[#1D2123] rounded-lg text-xs px-8 py-3 text-[#FFF] borna'>GET STARTED</button>
                </li>
                <li>
                    <button className='bg-[#FFF] rounded-lg text-xs border-2 px-8 py-3 borna'>LOGIN</button>
                </li>
            </ul>
        </nav>

        {showNav && (
            <nav className='absolute right-0 top-14 w-[70%] h-screen pr-4 pl-14 py-4 text-white bg-black z-50'>
            <ul className=''>
            <li>
                    <a href=""  className='text-sm leading-10'>ACCOUNTS</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>TRADING</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>EDUCATION</a>
                </li>
                <li>
                    <a href="" className='text-sm leading-10'>COMPANY</a>
                </li>
            </ul>
            <ul className=''>
            <li>
                    <a href="" className='text-sm leading-10 borna'>AR</a>
                </li>
                <li>
                    <button className='bg-[#1D2123] rounded-full text-xs px-6 py-2 text-[#FFF] borna'>GET STARTED</button>
                </li>
                <li>
                    <button className='bg-[#FFF] rounded-full text-xs border-2 px-6 py-2 borna'>LOGIN</button>
                </li>
        </ul>
        </nav>
        )}

    <p onClick={() => setShowNav(!showNav)} className='md:hidden cursor-pointer'>menu</p>
    </header>
  )
}

export default Navbar