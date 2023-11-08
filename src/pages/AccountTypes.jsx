import React from 'react'

const AccountTypes = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center px-20 py-20 bg-gradient-to-r from-[#2d73ff3f] to-[#eee]'>
        <div className='flex-1'>
            <p className='w-[30%] mx-auto text-xs py-6 text-[#0057ff] font-semibold tracking-widest'>ACCOUNT TYPES</p>
            <h2 className='w-[4/5] text-2xl md:text-5xl inter font-semibold py-4'>Trading<span className='text-[#0057ff]'> Account Types</span></h2>
        </div>
        <div className='flex-1'>
            <p>Each of expode live trading accounts has its own set of terms and conditions, which are customized to various types of traders based on their specific requirements.</p>
        </div>
    </div>
    <section className='py-20'>
        <div className="w-[80%] mx-auto flex flex-wrap gap-10">
            <div className='p-10 rounded-md border border-1 hover:shadow-lg'>
                <span></span>
                <h4 className='font-semibold text-lg text-center'>SILVER</h4>
                <p className='mt-10'>Deposit</p>
                <b className='text-normal md:text-2xl'>$250-$4,999</b>
                <p className='text-normal md:text-lg mt-5'>Spread starts from 3 pips</p>
                <hr className='my-8' />
                <p className='leading-10'>Account Manager</p>
                <p className='leading-10'>Daily market summary *</p>
                <p className='leading-10'>Market analysis *</p>
                <p className='leading-10'>Senior account manager</p>
                <p className='leading-10'>Trading central platform</p>
                <p className='leading-10'>Debit card</p>
                <p className='leading-10'>No withdrawal fees</p>
                <p className='leading-10'>Special events</p>

                <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                    <span className='text-sm'>Get Started</span>
                </button>
            </div>
            <div className='bg-[#0057ff] text-white p-10 rounded-md border border-1 hover:shadow-lg'>
                <h4 className='font-semibold text-lg text-center'>GOLD</h4>
                <p className='mt-10'>Deposit</p>
                <b className='text-normal md:text-2xl'>$5,000-$19,999</b>
                <p className='text-normal md:text-lg mt-5'>Spread starts from 2.2 pips</p>
                <hr className='my-8' />
                <p className='leading-10'>Account Manager</p>
                <p className='leading-10'>Daily market summary *</p>
                <p className='leading-10'>Market analysis *</p>
                <p className='leading-10'>Senior account manager</p>
                <p className='leading-10'>Trading central platform</p>
                <p className='leading-10'>Debit card</p>
                <p className='leading-10'>No withdrawal fees</p>
                <p className='leading-10'>Special events</p>

                <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                    <span className='text-sm'>Get Started</span>
                </button>
            </div>
            <div className='p-10 rounded-md border border-1 hover:shadow-lg'>
                <h4 className='font-semibold text-lg text-center'>PLATINUM</h4>
                <p className='mt-10'>Deposit</p>
                <b className='text-normal md:text-2xl'>$20,000-$49,999</b>
                <p className='text-normal md:text-lg mt-5'>Spread starts from 1.8 pips</p>
                <hr className='my-8' />
                <p className='leading-10'>Account Manager</p>
                <p className='leading-10'>Daily market summary *</p>
                <p className='leading-10'>Market analysis *</p>
                <p className='leading-10'>Senior account manager</p>
                <p className='leading-10'>Trading central platform</p>
                <p className='leading-10'>Debit card</p>
                <p className='leading-10'>No withdrawal fees</p>
                <p className='leading-10'>Special events</p>

                <button className='bg-[#1d2123] py-4 px-8 mt-8 text-white group'>
                    <span className='text-sm'>Get Started</span>
                </button>
            </div>
        <p className='text-normal md:text-xl'>*This service is provided by third parties and should not be considered as a trading/investment advice</p>
        </div>
    </section>
    </>
  )
}

export default AccountTypes