const Banner = () => {
    return (
        <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0.1)),url('./assets/banner.png')] bg-no-repeat w-full bg-cover mt-12 rounded-xl  bg-center">
            <h1 className="lg:text-4xl font-medium max-w-[800px] px-4 mx-auto text-3xl text-white text-center pt-[140px]"><span className="inline-block pb-3">FlavorySavory Recipes:</span> <br />
            Explore Culinary delights and exceptional cooking guidelines</h1>
            <p className="max-w-[800px] px-3 mx-auto text-center lg:text-xl text-base lg:tracking-wider tracking-normal font-medium text-gray-300 pt-14">Get ready to ignite your passion for food and elevate your kitchen skills. Here you will get the art of cooking, expert tips, and delightful culinary experiences. Let's savor every moment together!</p>
            <div className="text-center pt-14 space-x-6 pb-48">
                <button className="px-6 py-3 bg-green-500 rounded-full hover:bg-green-700 font-semibold">Explore Now</button>
                <button className="px-6 py-2 text-white border-[1px] hover:bg-green-700 border-white rounded-full font-medium">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;