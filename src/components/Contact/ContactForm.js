import React from 'react';

const ContactForm = () => {

    return (
        <form className="contactform">
            <h1 className="contactform__information">Chcesz zamówić usługi lub zapytać o promocję?</h1>
            <h2 className="contactform__information">Skontaktuj się ze mną!</h2>
            <p className="contactform__information--salesman">Kamil Papież</p>

            <a className="contactform__information--salesman" href="tel:+48697401784">697-401-784</a>
            {/* <p className="contactform__information--salesman">kamil.papiez@netia.pl</p> */}
            <p className="contactform__information--positioner contactform__smalltext">lub napisz SMS o treści "Netia"</p>
            <label className="contactform__labelpositioner"><p className="contactform__smalltext">Oddzwonimy!</p>
            </label>
        </form >
    );
}

export default ContactForm;