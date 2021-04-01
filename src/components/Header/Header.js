import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import propic from '../../icons/Group 307.png';

const Header = () => {
    return (
        <nav>
            <h1 className="logo">WATCH<span className="flair">FLAIR</span></h1>
            <ul className="nav-link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li className="login-link"><Link to="/login">Login</Link></li>
                <img src={propic} alt=""/>
            </ul>
        </nav>
    );
};

export default Header;