import React from 'react'
import './styles/Button.css'

const Button = ({text, setClick}) => {
    return (
        <>
            <button className="styleButton shadow" onClick={setClick}>
                { text }
            </button>
        </>
    )
}

export default Button
