import React, { useEffect, useState } from 'react'
import HotItemCard from '../components/HotItemCard';



const MobileAccessories = (props) => {
    const [mobileAccessoriesToggle, setMobileAccessoriesToggle] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/mobileAccessories") {
            setMobileAccessoriesToggle(true);
        }
    }, [])
    return (
        <div className='HotAccessories'>
            <div>
                <img src={props.mobileAccessoriesCover} alt="Cover" />
            </div>
            <div>
                {mobileAccessoriesToggle ? props.mobileAccessories.map((item, index) => (<HotItemCard
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

export default MobileAccessories
