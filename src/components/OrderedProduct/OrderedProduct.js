import React from 'react';
import './OrderedProduct.css';

const OrderedProduct = (props) => {
    const{productName,imgUrl, quantity, OrderTime, price}= props.productDetail;
    return (
        <div className="ordered-product">
            <img src={imgUrl} alt=""/>
            <div className="ordered-product-detail">
                <h2>{productName}</h2>
                <p>Quantity: {quantity}</p>
                <p><strong>Ordered time: {OrderTime}</strong></p>
                <p><strong>Cost: ${price}</strong></p>
            </div>
        </div>
    );
};

export default OrderedProduct;