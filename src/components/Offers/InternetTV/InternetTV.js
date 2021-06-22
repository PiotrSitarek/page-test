import React, { useEffect } from 'react';
import Header from '../../Home/Header/Header';
import InternetTVOffers from './InternetTVOffers'
import Footer from '../../Home/Footer/Footer';
import ProgramList from '../ProgramList/ProgramList';

const InternetTV = () => {

    useEffect(() => {
        document.title = "Internet i Telewizja - Netia"
    }, []);

    return (
        <>
            <Header />
            <InternetTVOffers />
            <ProgramList />
            <Footer />
        </>
    );
}

export default InternetTV;