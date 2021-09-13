import React from 'react'
import './styles/Button.css'

const Button = (props) => {
    return (
        <>
            <button className="styleButton shadow" {...props}>
                { props.text }
            </button>
        </>
    )
}

export default Button
