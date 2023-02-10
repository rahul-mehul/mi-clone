import React, { useEffect, useState } from 'react'
import NavCard from '../components/NavCard';

function MiPhones(props) {
    const [miPhonesToggle, setMiPhonesToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/miphones") {
            setMiPhonesToggle(true);
        }
    }, [])
    return (
        <div className='navOptions'>
            {miPhonesToggle ? props.miPhones.map((item, index) => (
                <NavCard name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
            )) : " "}

        </div>
    )
}

export default MiPhones
