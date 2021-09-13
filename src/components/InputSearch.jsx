import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/InputSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputSearch = ({placeholder, onSearch}) => {
    const [value, setValue] = useState("");

    const handleOnClick = (e) => {
        onSearch(value);
    }

    return (
        <div className="container__input">
            <input type="text" placeholder={placeholder} className="input" onChange={(e) => setValue(e.target.value)}/>
            <button className="button" onClick={handleOnClick}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
};

InputSearch.propTypes = {
    placeholder : PropTypes.string,
    onSearch : PropTypes.func.isRequired,
}

export default InputSearch;