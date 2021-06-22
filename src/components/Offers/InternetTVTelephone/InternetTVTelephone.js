import React, { useEffect } from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import PhoneOffer from './PhoneOffer';


const InternetTVTelephone = () => {
    useEffect(() => {
        document.title = "Telefon stacjonarny - Netia"
    }, []);
    return (
        <>
            <Header />
            <PhoneOffer />
            <Footer />
        </>
    );
}

export default InternetTVTelephone;