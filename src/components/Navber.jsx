import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <nav>
            <ul className="flex gap-3 py-4 font-semibold">
                <NavLink to="/" className={({ isActive }) =>
                    ` px-4 py-1 text-sm font-semibold  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-[#995EB9]  text-white' : 'text-gray-950'
                    }`
                }>Home</NavLink>
                <NavLink to="/category" className={({ isActive }) =>
                    ` px-4 py-1 text-sm font-semibold  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-[#995EB9]  text-white' : 'text-gray-950'
                    }`
                }>Category</NavLink>

            </ul>
        </nav>
    );
};

export default Navber;