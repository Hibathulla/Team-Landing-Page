import Typed from 'react-typed';
import crypto from "./crypto.jpg"

const Hero = () => {
    return (
        <div className="relative text-white h-[100vh]">
        <img className='w-full h-full object cover' src={crypto} alt="/" />
            <div className="absolute top-0 w-full h-full mx-auto flex flex-col justify-center items-center py-5">
                <p className="uppercase text-[#08df9a] font-bold p-2">Growing with Data Analytics</p>
                <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl p-2 md:py-6">Grow with data</h1>
                <div>
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold inline-block py-4">fast, flexible, financing</p>
                    <Typed
                    className="md:text-4xl sm:text-3xl text-xl font-bold inline-block text-gray-600 ml-3"
                    strings={['SAAS', "BTB", "BTC"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop    
                />
                </div>
                <p className="md:text-xl font-bold text-gray-500 text-center">Monitor your data analytics to improve your BTB, BTC and SAAS platforms</p>
            <button className="mx-auto font-bold">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;