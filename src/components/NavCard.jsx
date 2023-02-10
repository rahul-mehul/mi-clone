import React from 'react'
import "../styles/NavCard.css"

function NavCard(props) {
    return (
        <div className='navCard'>
            <img src={props.image} alt={props.index} />
            <p>{props.name}</p>
            <span>{props.price}</span>
        </div>
    )
}

export default NavCard
