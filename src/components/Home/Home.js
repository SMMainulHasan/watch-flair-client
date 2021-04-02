import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

const Home = () => {
    const [productCollection, setProductCollection] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/product')
            .then(res => res.json())
            .then(data => setProductCollection(data))
    }, [])
    return (
        <>
            <Header />
            <div className="home">
                {
                    productCollection.map(pd => <ProductCard product={pd} key={pd._id} />)
                }
            </div>
        </>
    );
};

export default Home;