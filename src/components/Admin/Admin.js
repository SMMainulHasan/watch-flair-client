import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Admin.css';
import manage from '../../icons/grid 1.png';
import add from '../../icons/plus 1.png';
import edit from '../../icons/edit 1.png';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import profile from '../../icons/profile.png';
import { userContext } from '../../App';

const Admin = () => {
    const [user] = useContext(userContext);
    const location = useLocation();
    return (
        <div className="admin-container">
            <div className="admin-options">
            <h1 className="logo"><Link to="/">WATCH<span className="flair">FLAIR</span></Link></h1>
                <div className="admin-profile">
                    <img src={user.displayPic || profile} alt="" />
                    <p><strong>{user.name}</strong></p>
                </div>
                <p><Link to="/admin/manageProduct"> <img src={manage} alt="" /> Manage Product</Link></p>
                <p><Link to="/admin/addProduct"> <img src={add} alt="" /> Add Product</Link></p>
                <p><Link to="/admin/editProduct"> <img src={edit} alt="" /> Edit Product</Link></p>
            </div>
            <div className="option-field">
                {
                    location.pathname === "/admin/manageProduct" ?
                        <ManageProduct /> :
                        <AddProduct />
                }
            </div>
        </div>
    );
};

export default Admin;