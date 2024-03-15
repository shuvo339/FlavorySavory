import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div>
            <nav className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between items-center">
                <div className="left">
                    <h1 className="text-3xl font-bold">FlavorySimply</h1>
                </div>
                <div className="middle flex gap-4 opacity-70">
                    <a className="hover:bg-slate-300 p-2 rounded-md" href="">Home</a>
                    <a className="hover:bg-slate-300 p-2 rounded-md" href="">Recipes</a>
                    <a className="hover:bg-slate-300 p-2 rounded-md" href="">About</a>
                    <a className="hover:bg-slate-300 p-2 rounded-md" href="">Search</a>
                </div>
                <div className="right flex gap-2">
                    <div className="flex items-center">
                        <CiSearch className="-mr-8 z-10 text-xl"/>
                        <input className="outline-none bg-slate-200 rounded-full pl-12 py-2" type="text" placeholder="Search"/>
                    </div>
                    <div className="flex items-center bg-green-400 p-3 rounded-full text-xl">
                        <CgProfile />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;