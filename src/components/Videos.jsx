import React from 'react'
import VideosCard from './VideosCard'
import "../styles/Videos.css"

function Videos(props) {
    return (
        <div className='Videos'>
            {props.videos.map((item, index) => (
                <VideosCard index={index}
                    key={item.image}
                    image={item.image}
                    name={item.name} />
            ))}
        </div>
    )
}

export default Videos
