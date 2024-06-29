import {  useLoaderData } from "react-router-dom";


const CategoryBaseProduct = () => {
    const {products}=useLoaderData()
  if(products.length<1){
    return <h3>Loading .........</h3>
  }
    return (
        <div className='pb-10 text-3xl'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>title</th>
                            <th>category</th>
                            <th>price</th>
                            <th>stock</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            products.map((product,index )=>
                                <tr key={product.id}>
                                    <th>{index+1}</th>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryBaseProduct;