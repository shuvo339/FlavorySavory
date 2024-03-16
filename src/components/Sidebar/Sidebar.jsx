import PropTypes from 'prop-types';

const Sidebar = ({carts, handleAddToCookingList, cookingList}) => {

    return (
        <div className="lg:col-span-2 col-span-6 border-2 border-slate-200 p-2 rounded-lg h-fit">
            <h1 className="text-2xl text-center font-bold pb-5">Want to cook: {carts.length}</h1>
            <table>
                <thead>
                <tr className="flex pr-16 gap-8 pb-3 border-b-2">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
                </thead>
                <tbody >
                    {
                        carts.map((cart, idx)=>
                       
                        <tr key={idx} className="flex gap-5 py-3 bg-slate-200 items-center px-1 my-2">
                        <td>{idx+1}</td>
                        <td>{cart.recipe_name}</td>
                        <td>{cart.preparing_time}</td>
                        <td>{cart.calories}</td>
                        <td><button onClick={()=>handleAddToCookingList(cart.recipe_id, cart)} className="bg-green-400 hover:bg-slate-400 p-2 rounded-md">Preparing</button></td>
                        </tr>)
                        
                    }
                    </tbody>
            </table>

            {/* Currently Cooking  */}
            <h1 className="text-2xl text-center font-bold pb-5 pt-8">Currently cooking: {cookingList.length}</h1>
            <table>
                <thead>
                <tr className="flex pl-5 gap-14 pb-3 border-b-2">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                
                <tbody>
                    {
                        cookingList.map((cooking, idx)=>
                        <tr key={idx} className="flex gap-12 py-3 bg-slate-200 items-center px-5 my-2">
                        <td>{idx+1}</td>
                        <td>{cooking.recipe_name}</td>
                        <td>{cooking.preparing_time}</td>
                        <td>{cooking.calories}</td>
                    </tr>)
                    }
                </tbody>
                <tbody>
                <tr className="flex gap-8 px-8 pt-4">
                    <td>Total Time: {cookingList.reduce((p,c)=>p+parseInt(c.preparing_time.split(' ')[0]),0)} minutes</td>
                    <td>Total Calories: {cookingList.reduce((p,c)=>p+parseInt(c.calories.split(' ')[0]),0)} calories</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};

Sidebar.propTypes ={
    carts: PropTypes.array,
    handleAddToCookingList: PropTypes.func,
    cookingList: PropTypes.array,
}

export default Sidebar;