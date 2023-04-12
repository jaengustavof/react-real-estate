import React from 'react';
import Header from '../components/header/Header';
import About from '../components/homeAbout/About';
import HomeListing from '../components/homeListing/HomeListing';

const Home = () => {
    return (
        <>
            <Header></Header>
            <About></About>
            <HomeListing></HomeListing>
        </>
    );
}

export default Home;
