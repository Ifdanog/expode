import React from 'react'

const GlobalMarkets = () => {
  return (
    <div className="bg-[#F7F7F7] py-20">
        <div className='flex justify-between w-full xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto'>
            <div className='flex'>
                <div>
                    <h2 className='borna text-2xl'>Global Markets</h2>
                    <p className='mt-14 text-xs'>Why choose us for Gblobal Investing?</p>
                    <div className="flex">
                        <p>Global Network</p>
                    </div>
                    <div className="flex">
                        <p>Expert Insights</p>
                    </div>
                    <div className="flex">
                        <p>Cuttin-Egde Technology</p>
                    </div>

                    <button className='bg-[#1d2123] py-4 px-8 text-white rounded-sm'>Start Trading Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GlobalMarkets