import React from 'react'
import '../styles/StarProduct.css';

function StarProduct(props) {
    return (
        <div className='starProduct'>
            <div><a href={props.starProduct[0].image}><img src={props.starProduct[0].image} alt="1st Product" /></a></div>
            <div>
                <a href={props.starProduct[1].image}><img src={props.starProduct[1].image} alt="1st Product" /></a>
                <a href={props.starProduct[2].image}><img src={props.starProduct[2].image} alt="1st Product" /></a>
                <a href={props.starProduct[3].image}><img src={props.starProduct[3].image} alt="1st Product" /></a>
            </div>

        </div>
    )
}

export default StarProduct
