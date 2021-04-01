import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import manage from '../../icons/grid 1.png';
import add from '../../icons/plus 1.png';
import edit from '../../icons/edit 1.png';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <div className="admin-container">
            <div className="admin-options">
                <h1>WATCHFLAIR</h1>
                <p><Link to="/admin/manageProduct"> <img src={manage} alt=""/> Manage Product</Link></p>
                <p><Link to="/admin/addProduct"> <img src={add} alt=""/> Add Product</Link></p>
                <p><Link to="/admin/editProduct"> <img src={edit} alt=""/> Edit Product</Link></p>
            </div>
            <div className="option-field">
                <ManageProduct />
                <AddProduct />
            </div>
        </div>
    );
};

export default Admin;