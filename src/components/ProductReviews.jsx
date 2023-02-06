import React from "react";
import "../styles/ProductReviews.css"
import ProductReviewsCard from "./ProductReviewsCard";
const ProductReviews = (props) => {
    return (
        <div className="ProductReviews">
            {props.ProductReviews.map((item, index) => (<ProductReviewsCard price={item.price}
                name={item.name}
                image={item.image}
                review={item.review}
                index={index}
                key={item.image}

            />
            ))}
        </div>
    )
}
export default ProductReviews