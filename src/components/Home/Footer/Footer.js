import React from 'react';
const Footer = () => {


    return (
        <>
            <footer className="footer">
                <section className="footer__information footer__information--positioner">
                    <p className="footer__informationlinks">Kontakt z przedstawicielem</p>
                    <p className="footer__informationlinks">Kamil Papież </p>
                    <p className="footer__informationlinks">697-401-784</p>
                </section>
                <section className="footer__information footer__information--positioner">
                    <a className="footer__informationlinks" id="footer__mobile_links" href="https://netia-oferta.pl/polityka_prywatnosci.pdf" target="_blank" rel="noopener noreferrer">Polityka Prywatności</a>
                    {/* <a className="footer__informationlinks" id="footer__mobile_links" href="http://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/" target="_blank" rel="noopener noreferrer">Jak wyłączyć cookies?</a>
                    <a className="footer__informationlinks" id="footer__mobile_links" href="https://jakwylaczyccookie.pl/jak-bezpiecznie-korzystac-z-cookies/" target="_blank" rel="noopener noreferrer">Bezpieczeństwo</a> */}
                </section>
            </footer>

        </>
    );
}
export default Footer;
