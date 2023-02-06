import React from 'react'
import "../styles/ProductReviewsCard.css"
function ProductReviewsCard(props) {
    return (
        <div className='ProductReviewsCard'>
            <img src={props.image} alt={`${props.index} review`} />
            <h5>{props.review}</h5>
            <span>{props.name}</span>
            <b>{props.price}</b>

        </div>
    )
}

export default ProductReviewsCard
