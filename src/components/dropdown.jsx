import React from 'react'
import './styles/Dropdown.css'
const dropdown = () => {
    return (
        <>
            <div class="dropdowncls">
                <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
            </div>
        </>
    )
}

export default dropdown
