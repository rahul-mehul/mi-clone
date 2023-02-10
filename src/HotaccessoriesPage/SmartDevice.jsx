import React, { useEffect, useState } from 'react'
import HotItemCard from '../components/HotItemCard'


const SmartDevice = (props) => {
    const [smartDeviceToggle, setSmartDeviceToggle] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/smartDevice") {
            setSmartDeviceToggle(true);
        }
    }, [])
    return (
        <div className='HotAccessories'>
            <div>
                <img src={props.smartDeviceCover} alt="Cover" />
            </div>
            <div>
                {smartDeviceToggle ? props.smartDevice.map((item, index) => (<HotItemCard
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

export default SmartDevice
