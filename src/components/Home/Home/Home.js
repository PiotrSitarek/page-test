import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
// import AddressCheck from '../AddresCheck/AddressCheck';
import NewComponent from '../NewComponent/NewCoponent';

const Home = () => {

    useEffect(() => {
        document.title = "Netia - internet, telewizja, telefon"
    }, []);

    return (
        <>
            <Header />
            <section className="homeposition">
                <NewComponent />
                <Slider />
            </section>
            <Footer />
        </>
    );
}

export default Home;