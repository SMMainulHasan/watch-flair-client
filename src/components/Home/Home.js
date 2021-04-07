import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import CircularProgress from '../CircularProgress/CircularProgress';
import './Home.css';

const Home = () => {
    const [productCollection, setProductCollection] = useState([])
    useEffect(() => {
        fetch('https://gentle-mesa-65432.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProductCollection(data))
    }, [])
    return (
        <>
            <Header />
            <div className="home">

                {
                    productCollection.length < 1 && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", width: "100%" }}><CircularProgress /></div>
                }

                {
                    productCollection.map(pd => <ProductCard product={pd} key={pd._id} />)
                }
            </div>
        </>
    );
};

export default Home;