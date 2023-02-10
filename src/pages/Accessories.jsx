import React, { useEffect, useState } from 'react'
import NavCard from '../components/NavCard'
import '../styles/NavOption.css'


const Accessories = (props) => {
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/accessories") {
            setAccessoriesToggle(true)
        }
    }, []);
    return (
        <div className='navOptions'>
            {accessoriesToggle ? props.accessories.map((item, index) => (
                <NavCard name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
            )) : " "}

        </div>
    )
}

export default Accessories
