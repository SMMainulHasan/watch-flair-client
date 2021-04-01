import React from 'react';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <ProductCard />
            </div>
        </>
    );
};

export default Home;