import React, { useEffect } from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import CellPhoneOffer from './CellPhoneOffer'

const MobileInternet = () => {
    useEffect(() => {
        document.title = "Telefon komórkowy - Netia"
    }, []);
    return (
        <>
            <Header />
            <CellPhoneOffer />
            <Footer />
        </>
    );
}

export default MobileInternet;