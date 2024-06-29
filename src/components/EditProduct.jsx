import axios from "axios";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
    const { id, title, price, description, weight, discountPercentage } = useLoaderData()
    const handeform = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const category = form.category.value
        const description = form.description.value
        const price = form.price.value
        const weight = form.weight.value
        const discountPercentage = form.discountPercentage.value
        const updateInfo = { title, category, description, price, weight, discountPercentage }
        try {
            const response = await axios.patch(`https://dummyjson.com/products/${id}`, updateInfo);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };


    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <h3 className="my-4 text-2xl ">Update Product</h3>
                <div>
                    <form onSubmit={handeform} >
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label >Category</label>
                                <br />
                                <select name="category" className="h-[45px] w-full rounded-md">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div>
                                <label >Title</label>
                                <br />
                                <input type="text" name="title" defaultValue={title} placeholder="title" className="w-[400px]" />
                            </div>
                            <div>
                                <label >Price</label>
                                <br />
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="w-[400px]" />
                            </div>
                            <div>
                                <label >DiscountPercentage</label>
                                <br />
                                <input type="text" name="discountPercentage" defaultValue={discountPercentage} placeholder="discountPercentage" className="w-[400px]" />
                            </div>
                            <div>
                                <label >Weight</label>
                                <br />
                                <input type="text" name="weight" defaultValue={weight} placeholder="weight" className="w-[400px]" />
                            </div>


                            <div className="col-span-2  w-full">
                                <label >Description</label>
                                <br />
                                <textarea type="text" name="description" defaultValue={description} placeholder="description" className="w-full p-2" />
                            </div>

                        </div>
                        <div className="col-span-2  w-full mt-4">
                            <button className="w-full">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;