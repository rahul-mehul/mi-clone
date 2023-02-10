import React, { useEffect, useState } from 'react'
import NavCard from '../components/NavCard';


const FitnessAndLifestyle = (props) => {
    const [fitnessToggle, setFitnesToggle] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/fitness&lifestyle") {
            setFitnesToggle(true)
        }
    }, [])
    return (
        <div className='navOptions'>
            {fitnessToggle ? props.fitnessAndLifeStyle.map((item, index) => (
                <NavCard name={item.name}
                    price={item.price}
                    image={item.image}
                    key={index} />
            )) : " "}
        </div>
    )
}

export default FitnessAndLifestyle
