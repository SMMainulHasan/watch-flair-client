import React, { useContext, useState } from 'react';
import './Orders.css';
import Header from '../Header/Header'
import { useEffect } from 'react';
import { userContext } from '../../App';
import OrderedProduct from '../OrderedProduct/OrderedProduct';


const Orders = () => {
    const [yourOrders, setYourOrders] = useState([]);
    
    const [user] = useContext(userContext);
    useEffect(()=>{
        fetch(`https://gentle-mesa-65432.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setYourOrders(data))
    },[user.email])
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