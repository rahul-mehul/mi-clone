import React from 'react'
import '../styles/HotAccessoriesMenu.css'
import { Link } from 'react-router-dom'

function HotAccessoriesMenu() {
    return (
        <div className='HotAccessoriesMenu'>
            <Link className='HotAccessorieslink' to='/music'>Music Store</Link>
            <Link className='HotAccessorieslink' to='/smartDevice'>Smart Devices</Link>
            <Link className='HotAccessorieslink' to='/home'>Home</Link>
            <Link className='HotAccessorieslink' to='/lifestyle'>Life Style</Link>
            <Link className='HotAccessorieslink' to='/mobileAccessories'>Mobile Accessories</Link>

        </div>
    )
}

export default HotAccessoriesMenu
