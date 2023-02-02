import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'

function HotAccessories(props) {
    return (
        <div className='HotAccessories'>
            <div>
                <img
                    src={props.musicCover} alt="Cover" />
            </div>
            <div>
                {props.music.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                ))}
            </div>

        </div>
    )
}

export default HotAccessories
