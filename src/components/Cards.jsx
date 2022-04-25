import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const Cards = () => {
    return (
        <section className="py-[10rem px-4 bg-white py-[10rem]">
            <div className="max-w-[1200px] grid md:grid-cols-3 gap-8 px-4">

                <div className="cards p-4 shadow-xl rounded-lg flex flex-col items-center my-8 md:my-0 duration-300 hover:scale-105 transition-all">
                    <img className="w-20 mt-[-3rem] mx-auto" src={single} alt="/" />
                    <h2 className=" py-3 text-2xl font-bold text-center">Single User</h2>
                    <p className="text-3xl font-bold text-center">$149</p>
                    <div className="text-center font-medium mt-8">
                        <p className="py-2 border-b">500GB Storage</p>
                        <p className="py-2 border-b">1 Granted User</p>
                        <p className="py-2 border-b">Send upto 2GB</p>
                    </div>
                    <button>Start trial</button>
                </div>

                <div className="cards p-4 shadow-xl rounded-lg flex flex-col items-center my-8 md:my-0 hover:scale-105 duration-300 transition-all py-10 bg-gray-100">
                    <img className="w-20 mt-[-5rem] mx-auto bg-transparent" src={double} alt="/" />
                    <h2 className=" py-3 text-2xl font-bold text-center">Partnership</h2>
                    <p className="text-3xl font-bold text-center">$199</p>
                    <div className="text-center font-medium mt-8">
                        <p className="py-2 border-b">500GB Storage</p>
                        <p className="py-2 border-b">1 Granted User</p>
                        <p className="py-2 border-b">Send upto 2GB</p>
                    </div>
                    <button className="bg-black text-green-300">Start trial</button>
                </div>

                <div className="cards p-4 shadow-xl rounded-lg flex flex-col items-center my-8 md:my-0 hover:scale-105 duration-300 transition-all">
                    <img className="w-20 mt-[-3rem] mx-auto" src={single} alt="/" />
                    <h2 className=" py-3 text-2xl font-bold text-center">Multiple User</h2>
                    <p className="text-3xl font-bold text-center">$299</p>
                    <div className="text-center font-medium mt-8">
                        <p className="py-2 border-b">500GB Storage</p>
                        <p className="py-2 border-b">1 Granted User</p>
                        <p className="py-2 border-b">Send upto 2GB</p>
                    </div>
                    <button>Start trial</button>
                </div>
            </div>
        </section>
    )
}

export default Cards;