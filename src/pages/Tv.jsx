import React, { useState, useEffect } from 'react'
import NavCard from '../components/NavCard';

const Tv = (props) => {
    const [tvToggle, setTv] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/tv") {
            setTv(true)
        }
    }, [])
    return (
        <div className='navOptions'>
            {tvToggle ? props.tv.map((item, index) => (
                <NavCard name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
            )) : " "}

        </div>
    )
}

export default Tv;
