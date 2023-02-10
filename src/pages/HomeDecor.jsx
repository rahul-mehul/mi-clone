import React, { useEffect, useState } from 'react'
import NavCard from '../components/NavCard';

const HomeDecor = (props) => {

    const [homeDecorToggle, setHomeDecoreToggle] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/homedecor") {
            setHomeDecoreToggle(true);
        }
    }, []);

    return (
        <div className='navOptions'>
            {
                homeDecorToggle ? props.home.map((item, index) => <NavCard
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
                ) : ""
            }

        </div>
    )
}

export default HomeDecor
