import React, { useEffect } from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import InternetOffers from './InternetOffers';


const Internet = () => {
    useEffect(() => {
        document.title = "Internet - Netia"
    }, []);
    return (
        <>
            <Header />
            <InternetOffers />
            <Footer />
        </>
    );
}

export default Internet;