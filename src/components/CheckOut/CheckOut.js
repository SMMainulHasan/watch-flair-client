import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import './CheckOut.css'

const CheckOut = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [user] = useContext(userContext);
    const { price, productName, brand, strapType, imgUrl, _id } = productDetail;

    useEffect(() => {
        fetch(`https://gentle-mesa-65432.herokuapp.com/product-detail/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, [])

    let quantity = 1;
    const productId = _id;

    const placeOrder = () => {
        if (user.email && productDetail.productName) {
            const orderProduct = { ...user, productId, price, productName, brand, strapType, quantity, imgUrl, OrderTime: new Date() }
            console.log(orderProduct);

            fetch('https://gentle-mesa-65432.herokuapp.com/addOrderPlace', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderProduct)
            }).then(res => {
                if (res.status === 200) {
                    window.alert('Order Placed successfully!')
                }
                else {
                    window.alert('Sorry try again!')
                }
            })
        }
    }



    return (
        <>
            <Header />
            <div className="checkout">
                <h2>Checkout</h2>
                <div className="checkout-table">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>{productName}</td>
                                <td>1</td>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>${price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={placeOrder} className="button checkout-btn">Place Order</button>
                </div>
            </div>
        </>
    );
};

export default CheckOut;