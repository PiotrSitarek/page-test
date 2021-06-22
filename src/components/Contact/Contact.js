import React, { useEffect } from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import ContactForm from '../Contact/ContactForm';


const Contact = () => {
    useEffect(() => {
        document.title = "Kontakt - Netia"
    }, []);
    return (
        <>
            <Header />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;