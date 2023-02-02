import React from 'react'
import '../styles/HotItemCard.css'

function HotItemCard(props) {
    return (
        <div className='HotItemCard'>
            <img
                src={props.image}
                alt={`${props.index} product`} />

            <p>{props.name}</p>

            <span>{props.price}</span>

        </div>
    )
}

export default HotItemCard
