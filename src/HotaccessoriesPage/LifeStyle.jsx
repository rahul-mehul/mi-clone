import React, { useEffect, useState } from 'react'
import HotItemCard from '../components/HotItemCard';


const LifeStyle = (props) => {
    const [lifeStyleToggle, setLifeStyleToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/lifestyle") {
            setLifeStyleToggle(true);
        }
    }, []);
    return (
        <div className='HotAccessories'>
            <div>
                <img src={props.lifeStyleCover} alt="" />
            </div>
            <div>
                {lifeStyleToggle ? props.lifeStyle.map((item, index) => (<HotItemCard
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

export default LifeStyle
