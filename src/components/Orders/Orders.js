import React, { useContext, useState } from 'react';
import './Orders.css';
import Header from '../Header/Header'
import { useEffect } from 'react/cjs/react.development';
import { userContext } from '../../App';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
    const [yourOrders, setYourOrders] = useState([]);
    console.log(yourOrders);
    
    const [user] = useContext(userContext);
    useEffect(()=>{
        fetch(`http://localhost:5055/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setYourOrders(data))
    },[])
    return (
        <>
            <Header />
            <div className="orders">
                <h1>Your Orders</h1>
                {
                    yourOrders.map(pd => <OrderedProduct productDetail= {pd} key= {pd._id} />)
                }
            </div>
        </>
    );
};

export default Orders;