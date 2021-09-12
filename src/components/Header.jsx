import React from 'react';
import './styles/Header.css';

const Header = ({name}) => {
    return (
        <header className="header">
            <p className="name">
                {name}
            </p>
        </header>
    );
};

export default Header;