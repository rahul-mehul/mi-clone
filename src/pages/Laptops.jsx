import React, { useEffect, useState } from 'react'
import NavCard from '../components/NavCard';

const Laptops = (props) => {
    const [laptopToggle, setLaptopToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/laptops") {
            setLaptopToggle(true);
        }
    }, [])
    return (
        <div className='navOptions'>
            {laptopToggle ? props.laptop.map((item, index) => <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={index} />) : ""}

        </div>
    )
}

export default Laptops
