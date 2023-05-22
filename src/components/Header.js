import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Header.css';
import InputField from './InputField';
import { Link } from 'react-router-dom';

//Dummy Header component - Non Functional
function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <h1 className="header__title">Company</h1>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    
                    <li className="header__nav-item"><Link to="/">Home</Link></li>
                    <li className="header__nav-item"><Link to="/about">About</Link></li>

                    <li className="header__nav-item">
                        <InputField placeholder="Search..." />
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;
