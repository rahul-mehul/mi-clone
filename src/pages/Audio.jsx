import React, { useEffect, useState } from 'react'
import NavCard from '../components/NavCard'


const Audio = (props) => {
    const [audioToggle, setAudioToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/audio") {
            setAudioToggle(true)
        }
    }, [])
    return (
        <div className='navOptions'>
            {audioToggle ? props.audio.map((item, index) => (
                <NavCard name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
            )) : " "}
        </div>
    )
}

export default Audio
