import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1 className="logo-text">Librería Luciano Lollo</h1>
                    <p className="logo-subtitle">Tu mundo de conocimiento</p>
                </div>
            </div>
        </header>
    );
};

export default Header;

