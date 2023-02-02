import React from 'react'
import "../styles/Heading.css"

function Heading(props) {
    return (
        <div className='heading'>
            <div></div>
            <p>{props.text}</p>
            <div></div>
        </div>
    )
}

export default Heading
