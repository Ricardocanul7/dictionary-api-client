import React from 'react';
import './styles/InputSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputSearch = ({placeholder}) => {
    return (
        <div className="container__input">
            <input type="text" placeholder={placeholder}  className="input"/>
            <button className="button"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
};

export default InputSearch;