import React from 'react';
import { Link as Router } from 'react-router-dom';

const NewComponent = () => {

    return (
        <form className="contactform">
            {/* <h1 className="contactform__information">Zadzwoń do mnie i zapytaj o promocje!</h1>
            {/* <h2 className="contactform__information">Skontaktuj się z nami!</h2> */}
            {/* <p className="contactform__information--salesman">Kamil Papież</p>
            <p className="contactform__information--salesman">697-401-784 </p> */}
            <div className="about_slider" >
                <p className="about_slogan">Nowe pakiety</p>
                <p className="about_slogan2">w Netii!</p>
                <h1 className="about_slogan3">Internet 300 Mb/s + 99 kanałów TV = 60 zł</h1>
                <p className="about_slogan4">Zadzwoń i zapytaj o promocje!</p>
                <Router to="/Kontakt" className="navigation_list_mobile"><button className="checkAddressButton">Kontakt</button></Router>
            </div>
        </form >
    );
}

export default NewComponent;