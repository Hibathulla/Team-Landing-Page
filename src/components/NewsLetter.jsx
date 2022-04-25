const NewsLetter = () => {
    return (
        <section className="w-full py-16 text-white px-4">
            <div className="max-w-[1210px] grid lg:grid-cols-3">
                <div className="lg:col-span-2 flex flex-col justify-center">
                    <h1 className="font-bold md:text-3xl sm:text-2xl text-xl">Sign up for our NewsLetter to get tips and Tricks?</h1>
                    <p>Hassle Reply upto Date</p>
                </div>
                <div className="my-4">
                <div className="flex flex-col md:flex-row justify-center items-center ">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                    <button className="rounded-md ml-4">Notify Me</button>
                </div>
                    <p className="mx-auto">We care about your protection. Read our <span className="text-green-500 cursor-pointer hover:text-green-600">Privacy Policy</span></p>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;