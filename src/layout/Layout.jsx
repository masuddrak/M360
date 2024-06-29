import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div>
            <div className="container px-5 mx-auto">
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Layout;