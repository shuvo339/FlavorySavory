import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./recipeData.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    }, [])
    
    return (
        <div className="lg:col-span-4 col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;