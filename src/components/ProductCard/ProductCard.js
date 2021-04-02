import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    const {imgUrl, productName, price} = props.product;
    return (
        <div className="product-cart">
            <img src={imgUrl} alt="" />
            <div className="product-detail">
            <h4>{productName}</h4>
            <div className="price-container">
                <h2>${price}</h2>
                <button className="buy-btn">Buy Now</button>
            </div>
            </div>
        </div>
    );
};

export default ProductCard;