import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'

function HotAccessories(props) {
    return (
        <div className='HotAccessories'>
            <div>
                <img
                    src={props.musicCover || props.smartDeviceCover || props.homeCover || props.lifeStyleCover || props.mobileAccessoriesCover} alt="Cover" />
            </div>
            <div>
                {props.music && props.music.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                ))}

                {props.smartDevice && props.smartDevice.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                ))}

                {props.home && props.home.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                ))}

                {props.lifeStyle && props.lifeStyle.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                ))}
                {props.mobileAccessories && props.mobileAccessories.map((item, index) => (<HotItemCard
                    key={item.image}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    index={index} />
                ))}
            </div>

        </div>
    )
}

export default HotAccessories
