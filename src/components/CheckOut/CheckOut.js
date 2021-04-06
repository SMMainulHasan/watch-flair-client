import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { userContext } from '../../App';
import Header from '../Header/Header';
import './CheckOut.css'

const CheckOut = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [user] = useContext(userContext);
    const { price, productName } = productDetail;

    useEffect(() => {
        fetch(`http://localhost:5055/product-detail/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, [])

    let quantity = 1;

    const placeOrder = () => {
        if (user.email && productDetail.productName) {
            const orderProduct = { ...user, ...productDetail, quantity, OrderTime: new Date() }

            fetch('http://localhost:5055/addOrderPlace', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderProduct)
            }).then(res => {
                if (res.status === 200) {
                    window.alert('Order successfully!')
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