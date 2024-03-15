import { FiClock } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = () => {
    return (
        <div className="border-2 border-slate-200 p-6 rounded-lg">
            <img className="rounded-lg h-52 w-full" src="./test.jpg" alt="" />
            <h1 className="text-xl font-semibold py-4">Spagetti Bolognese</h1>
            <p className="text-gray-500 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus, expedita dignissimos corrupti ab perspiciatis.</p>
            <hr />
            <h2 className="pt-5 pb-3">Ingredients: 6</h2>
            <ul className="list-disc ml-7 text-gray-500 pb-4">
                <li>Chicken</li>
                <li>Potato</li>
                <li>Oil</li>
            </ul>
            <hr />
            <div className="flex gap-8 py-6">
                <div className="flex items-center gap-2">
                    <FiClock />
                    <span>20 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineFire />
                    <span>600 calories</span>
                </div>
            </div>

            <button className="px-6 py-2 rounded-full bg-green-400 font-semibold">Want to Cook</button>
        </div>
    );
};

export default Recipe;