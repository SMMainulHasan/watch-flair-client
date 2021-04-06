import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = (props) => {
    const { imgUrl, productName, price, _id } = props.product;
    return (
        <div className="product-cart">
            <img src={imgUrl} alt="" />
            <div className="product-detail">
                <h4>{productName}</h4>
                <div className="price-container">
                    <h2>${price}</h2>
                    <Link to={"/checkout/"+_id}>
                        <button className="button">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;