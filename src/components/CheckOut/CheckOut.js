import React from 'react';
import Header from '../Header/Header';
import './CheckOut.css'

const CheckOut = () => {
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
                                <td>cahfgidhgfdh rgte f fg</td>
                                <td>1</td>
                                <td>$255</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>$255</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button checkout-btn">Checkout</button>
                </div>
            </div>
        </>
    );
};

export default CheckOut;