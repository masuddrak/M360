import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ProductDetails from "../components/ProductDetails";
import EditProduct from "../components/EditProduct";
import Home from "../pages/Home";
import Category from "../pages/Category";
import CategoryBaseProduct from "../components/CategoryBaseProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
               
            },
         
            {
                path: "/category",
                element: <Category></Category>,
               
            },
            {
                path: "/categoryData/:slug",
                element: <CategoryBaseProduct></CategoryBaseProduct>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/category/${params.slug}`)
            },
            {
                path: "/details/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: "/eidtProduct/:id",
                element: <EditProduct></EditProduct>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
        ]
    },

]);
export default router