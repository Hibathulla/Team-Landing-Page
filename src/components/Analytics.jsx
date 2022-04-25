import analytics from "../assets/analytics.png"

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="mx-auto grid md:grid-cols-2">
                <img className="m-auto w-[80%]" src={analytics} alt="analytics" />
                <div className="mt-5 flex flex-col justify-center">
                 <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
                 <h1 className="font-bold text-xl sm:text-2xl md:text-2xl py-2">Manage Data Analytics Centrally</h1>
                 <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, eaque dolorem? Animi, laboriosam vel nam perferendis amet debitis explicabo eius nisi aperiam nostrum voluptate? Assumenda asperiores nesciunt quibusdam modi! Mollitia impedit labore cupiditate illo omnis ea autem enim laudantium culpa. Nulla aliquid, pariatur tempora consectetur itaque officiis exercitationem. Blanditiis at maxime consectetur, ullam eaque alias sapiente tempore dolore doloribus possimus nemo officiis necessitatibus magni quis. Perferendis doloremque nemo dolore vel!</p>
                 <button className="mr-auto bg-black text-green-500 mx-auto md:mx-0">Get Started</button>
            </div>
            </div>
        </div>
    )
}

export default Analytics;