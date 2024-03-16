import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleCart}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./recipeData.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    }, [])
    
    return (
        <div className="lg:col-span-4 col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} handleCart={handleCart} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes ={
    handleCart: PropTypes.func,
}
export default Recipes;