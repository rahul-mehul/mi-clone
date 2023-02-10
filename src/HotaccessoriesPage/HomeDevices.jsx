import React, { useEffect, useState } from 'react'
import HotItemCard from '../components/HotItemCard';


const HomeDevices = (props) => {
    const [homeDevice, setHomeDevice] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/homedevices") {
            setHomeDevice(true);
        }
    }, []);
    return (
        <div className='HotAccessories'>
            <div>
                <img src={props.homeCover} alt="homeCover" />
            </div>
            <div>
                {homeDevice ? props.home.map((item, index) => (<HotItemCard
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

export default HomeDevices
