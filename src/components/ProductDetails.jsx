
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import ReviewForm from "./ReviewForm";

const ProductDetails = () => {
 
    const { id,title, images, description, reviews } = useLoaderData()

    const [allReviews, setAllReviews] = useState(reviews)
    const handelDeletButon = (email) => {
        let updateReviews = reviews
        const rmoveElement = reviews.filter(review => review.reviewerEmail !== email)
        updateReviews = rmoveElement
        setAllReviews(updateReviews)
    }
    return (
        <div className="mx-auto md:w-2/3">
            <div className="items-center gap-4 mx-auto border-b md:w-2/3 md:flex">
                <img className="w-[400px] h-[300px] object-contain" src={images[0]} alt="" />
                <div>
                    <h3 className="text-2xl">{title}</h3>
                    <h3>{description}</h3>
                    <p className="my-3"><Link to={`/eidtProduct/${id}`} ><button>Edit Product</button></Link></p>
                </div>
                
            </div>
            <div>
                {allReviews?.map((review, index) =>
                    <div key={index} className="my-2">
                        <p>{review.rating}</p>
                        <p>{review.comment}</p>
                        <p>{review.reviewerName}</p>
                        <p>{review.reviewerEmail}</p>
                        <button onClick={() => handelDeletButon(review.reviewerEmail)}>Delete</button>
                    </div>
                )}
            </div>
            <div>
               <ReviewForm id={id} reviews={reviews}></ReviewForm>
            </div>
        </div>
    );
};

export default ProductDetails;