import React, { useEffect } from 'react';
import { useHistory } from "react-router";

const PageNotFound = () => {
    useEffect(() => {
        document.title = "404 - Strona nie istnieje"
    }, []);
    const history = useHistory();

    const ComeBackFunction = () => {
        history.push("/")
    }


    return (
        <section className="pageNotFound">

            <p>Witaj na końcu internetu...</p>
            <p>Tutaj nie ma nic.</p>
            <p>Na szczęście masz możliwość powrotu.</p>
            <button onClick={ComeBackFunction} className="comeBackButton">Wracamy na stronę</button>


        </section>

    );
}

export default PageNotFound;