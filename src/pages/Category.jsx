import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../redux/productsApi";


const Category = () => {
    const { data, isLoading } = useGetCategoriesQuery();
    if(isLoading) return <h3 className="text-2xl">loading............</h3>
    return (
        <div className="mb-4">
            <div className="grid gap-4 py-5 lg:grid-cols-6 md:grid-cols-4">
                {data.map(category => <Link to={`/categoryData/${category?.slug}`}  key={category.slug} className="px-3 py-2 font-semibold text-center text-white bg-gray-900 rounded-sm text-md">{category.name}</Link>)}
            </div>
        </div>
    );
};

export default Category;