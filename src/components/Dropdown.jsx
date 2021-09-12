import React from 'react'
import './styles/Dropdown.css'
const Dropdown = ({ items, name, onSelected }) => {
    return (
        <>
            <div className="dropdowncls">
                <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
            </div>
        </>
    )
}

export default Dropdown
