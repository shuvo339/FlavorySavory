import { FiClock } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {recipe_id, recipe_image, recipe_name, description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="border-2 border-slate-200 p-6 rounded-lg">
            <img className="rounded-lg w-full h-52" src={recipe_image} alt="" />
            <h1 className="text-xl font-semibold py-4">{recipe_name}</h1>
            <p className="text-gray-500 pb-4">{description}</p>
            <hr />
            <h2 className="pt-5 pb-3">Ingredients: {ingredients.length}</h2>
            <ul className="list-disc ml-7 text-gray-500 pb-4">
                    {ingredients.map((ingredient, idx)=><li key={idx}>{ingredient}</li>)}
            </ul>
            <hr />
            <div className="flex gap-8 py-6">
                <div className="flex items-center gap-2">
                    <FiClock />
                    <span>{preparing_time}</span>
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineFire />
                    <span>{calories}</span>
                </div>
            </div>

            <button className="px-6 py-2 rounded-full bg-green-400 font-semibold">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object,
}

export default Recipe;