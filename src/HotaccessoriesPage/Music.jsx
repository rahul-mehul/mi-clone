import React, { useState, useEffect } from 'react'
import HotItemCard from '../components/HotItemCard';

const Music = (props) => {
    const [musicToggle, setMusicToggle] = useState(false);

    useEffect(() => {
        if (window.location.path === "/music") {
            setMusicToggle(true);
        }
    }, []);
    return (
        <div className='HotAccessories'>
            <div>
                <img src={props.musicCover} alt="Cover" />
            </div>
            <div>
                {!musicToggle ? props.music.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                )) : ""}
            </div>
        </div>
    )
}

export default Music
