import React, { useState, useEffect } from 'react'
import NavCard from '../components/NavCard';

const RedmiPhones = (props) => {
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/redmiphones") {
            setRedmiPhonesToggle(true)
        }
    }, [])
    return (
        <div className='navOptions'>
            {redmiPhonesToggle ? props.redmiPhones.map((item, index) => (
                <NavCard name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
            )) : " "}

        </div>
    )
}

export default RedmiPhones
