import React from 'react';
import './ProductCard.css';
import chips from '../../icons/image 37.png';

const ProductCard = () => {
    return (
        <div className="product-cart">
            <img src={chips} alt="" />
            <div className="product-detail">
            <h4>This is the product name</h4>
            <div className="price-container">
                <h2>$299</h2>
                <button className="buy-btn">Buy Now</button>
            </div>
            </div>
        </div>
    );
};

export default ProductCard;