const Banner = () => {
    return (
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url('./banner.png')] bg-no-repeat w-full bg-cover mt-12 rounded-lg  bg-center">
            <h1 className="lg:text-5xl font-medium max-w-[600px] mx-auto text-2xl text-white text-center pt-[120px]">Discover an exceptional cooking class tailored</h1>
            <p className="text-white max-w-[800px] px-2 mx-auto text-center opacity-80 pt-7">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="text-center pt-10 space-x-6 pb-48">
                <button className="px-6 py-3 bg-green-400 rounded-full hover:bg-green-700 font-semibold">Explore Now</button>
                <button className="px-6 py-2 text-white border-[1px] hover:bg-green-700 border-white rounded-full font-medium">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;