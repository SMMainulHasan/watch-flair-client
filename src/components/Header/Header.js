import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profile from '../../icons/profile.png';
import { userContext } from "../../App";

const Header = () => {
    const [user, setUser] = useContext(userContext);

    const logout = () => {
        setUser({})
    }

    return (
        <nav>
            <h1 className="logo">WATCH<span className="flair">FLAIR</span></h1>
            <ul className="nav-link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                {
                    user.email ? <li className="login-link" onClick={logout}><Link to="/login">Logout</Link></li>
                    : <li className="login-link"><Link to="/login">Login</Link></li>
                }
                <img src={user.displayPic || profile} alt=""/>
            </ul>
        </nav>
    );
};

export default Header;