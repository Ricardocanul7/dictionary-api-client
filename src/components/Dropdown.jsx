import React from 'react'
import { useState } from 'react/cjs/react.development';
import './styles/Dropdown.css'
const Dropdown = ({ items, name, onSelected }) => {

    const [dropdownSelected, setDropdownSelected]=useState("1");

    const [openMenu, setOpenMenu] = useState(false);

    const handleOnClick = (e) => {
        onSelected(e.target.value);
        setDropdownSelected(e.target.value);
        setButtonText(e.target.innerHTML);
        setOpenMenu(!openMenu);
    }

    const [buttonText, setButtonText] = useState("Selecciona una opcion");

    return (
        <>
            <div className="dropdowncls">
                <button className="dropbtn" onClick={() => setOpenMenu(!openMenu)}>{buttonText}</button>
                
                    <div className={'dropdown-content ' + (openMenu === true ? 'active' : '')} >
                        <ul>
                            {items.map((option) => {
                                
                                return <li key={option.value} value={option.value} onClick={handleOnClick}>{option.label}</li>
                                })
                            }
                        </ul>
                    </div>
            </div>
            
        </>
    )
}

export default Dropdown
