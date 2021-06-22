import React, { useEffect } from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import InternetOffers from '../Internet/InternetOffers'
import InternetTVOffers from '../InternetTV/InternetTVOffers';
import PhoneOffer from '../InternetTVTelephone/PhoneOffer';
import ProgramList from '../ProgramList/ProgramList';
import CellPhoneOffer from '../MobileInternet/CellPhoneOffer'

const MobileAll = () => {

    useEffect(() => {
        document.title = "Oferty - Netia"
    }, []);


    return (
        <>

            <Header />
            <InternetTVOffers />
            <InternetOffers />
            <ProgramList />
            <PhoneOffer />
            <CellPhoneOffer />
            <Footer />

        </>
    );
}

export default MobileAll;