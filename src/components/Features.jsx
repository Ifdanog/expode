import innovative from '../assets/innovative.svg'
import mobile from '../assets/mobile.svg'
import user from '../assets/user.svg'
import Tick from '../assets/Vector.svg'

const Features = () => {
  return (
    <div className='py-20'>
            <p className='w-[10%] text-center mx-auto bg-[#f8f8f8] text-xs py-6'>WHY EXPODE</p>
        <div className="w-[80%] md:w-[30%] mx-auto text-center">
            <h1 className='text-2xl borna'>Elevate Your Trading Experience</h1>
        </div>
        <div className="flex gap-6">
            <div className="bg-[#f8f8f8] px-4 py-10">
                <div className="offer__item wow fadeInUp">
                    <div className="w-15 h-15">
                        <span className='w-15 h-15'>
                            
                        </span>
                    </div>
                    <div className="text-center">
                        <h3 className='font-bold text-xl'>Innovative CFD Trading</h3>
                        <p className='text-lg'>At Expode, we embrace innovation to bring you cutting-edge CFD trading tools. Say goodbye to the ordinary and dive into a world of limitless possibilities.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#f8f8f8] px-4 py-10">
                <div className="offer__item is-mainly-red wow fadeInUp">
                    <div className="offer__icon">
                        <span>
                            
                        </span>
                    </div>
                    <div className="text-center">
                        <h3 className='font-bold text-xl'>User-Friendly Interface</h3>
                        <p className='text-lg'>Our platform's user-friendly design ensures that everyone can trade with confidence. It's trading made accessible without the complexities of Metatrader 4 and 5.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#f8f8f8] px-4 py-10">
              <div className="offer__item is-mainly-blue wow fadeInUp">
                    <div className="offer__icon">
                        <span>
                            
                        </span>
                    </div>
                <div className="text-center">
                    <h3 className='font-bold text-xl'>Mobile Excellence</h3>
                    <p className='text-lg'>Life moves fast, and so should your trading. With Expode's mobile web and app, you can trade on the go. Stay connected to the markets anytime and anywhere.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Features