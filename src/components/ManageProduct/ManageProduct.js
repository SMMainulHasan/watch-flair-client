import React from 'react';
import { useEffect, useState } from 'react';
import ManageProductData from '../ManageProductData/ManageProductData';
import './ManageProduct.css'
import CircularProgress from '../CircularProgress/CircularProgress';

const ManageProduct = () => {
    const [managePd, setManagePd] = useState([]);

    useEffect(() => {
        fetch('https://gentle-mesa-65432.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setManagePd(data))
    }, [])
    return (
        <div className="manage-product">
            <h2>Manage Product</h2>
            <div className="manage-product-container">
                <div className="table-header">
                    <h4>Product Name</h4>
                    <div className="brand-price-action">
                        <h4>Brand</h4>
                        <h4>Price</h4>
                        <h4>Action</h4>
                    </div>
                </div>
                {
                    managePd.length < 1 && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", width: "100%" }}><CircularProgress /></div>
                }
                {
                    managePd.map(pd => <ManageProductData managePd={[managePd, setManagePd]}  product={pd} key={pd._id} />)
                }
            </div>
        </div>
    );
};

export default ManageProduct;