import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
    return (
        <div className="mt-24"> 
            <h1 className="text-4xl text-center">Our Recipes</h1>
            <p className="opacity-80 text-center max-w-[800px] mx-auto px-2 pt-6">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            <div className="mt-12 grid grid-cols-6 gap-3">
                <Recipes></Recipes>

                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Main;