import React from 'react'
import "../styles/VideosCard.css"

function VideosCard(props) {
    return (
        <div className='VideosCard' style={{ backgroundImage: `url(${props.image})` }}>

            <p>{props.name}</p>

        </div>
    )
}

export default VideosCard
