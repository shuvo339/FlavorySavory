import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [carts, setCarts] = useState([]);
    const[cookingList, setCookingList] = useState([]);

    const handleCart =(recipe)=>{
        const newCart = [...carts, recipe];
        const isExisted = carts.find(cart=> cart.recipe_id == recipe.recipe_id)
        if(!isExisted){
            setCarts(newCart)
        }
        else{
            toast.error("Already Existed!")
        }
    }

    const handleAddToCookingList =(id, cart)=>{
        const remainingCarts = carts.filter(cart=>cart.recipe_id != id);
        setCarts(remainingCarts);

        const newCookingList = [...cookingList, cart];
        setCookingList(newCookingList);
    }

    return (
        <div className="mt-24"> 
            <h1 className="text-4xl text-center">Our Recipes</h1>
            <p className="opacity-80 text-center max-w-[800px] mx-auto px-2 pt-6">Whether you are a novice cook seeking simple yet flavorful dishes or a seasoned chef in search of gourmet delights, our recipes offers step-by-step instructions and helpful tips.</p>
            <div className="mt-12 grid lg:grid-cols-6 gap-6">
                <Recipes handleCart={handleCart}></Recipes>

                <Sidebar carts={carts} handleAddToCookingList={handleAddToCookingList} cookingList={cookingList}></Sidebar>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;