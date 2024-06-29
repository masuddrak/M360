
import AllProduct from "../components/AllProduct";


const Home = () => {
   
    return (
        <div className="w-full p-3 bg-white rounded-md">
            <h1 className='text-xl'>All Products</h1>
            <div >
            <AllProduct ></AllProduct>
            </div>
        </div>
    );
};

export default Home;