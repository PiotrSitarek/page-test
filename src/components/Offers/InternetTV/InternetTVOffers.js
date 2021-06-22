import React from 'react';
import { Link } from 'react-scroll';
import wifiImage from '../../../images/wifi-solid.svg';
import tvImage from '../../../images/tv-solid.svg';
import plusImage from '../../../images/plus-solid.svg';

const InternetTVOffers = () => {
    return (

        <section className="netTV__container container">
            <h1 className="offerInfo__style">Telewizja oraz internet światłowodowy</h1>
            <div className="netTV__images">
                <img src={wifiImage} className="netTV__image" alt="łączność wifi" />
                <img src={plusImage} className="netTV__plusImage" alt="plus" />
                <img src={tvImage} className="netTV__image" alt="telewizor" />
            </div>

            <div className="netTV__contractTime netTV__text row">
                <p className="netTV__text netTV__contractTimeOption">Oferta na 24 miesiące</p>
            </div>
            <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">Telewizja - Pakiet S +</p>
                <div className="netTV__speedOptions netTV__text row">
                    <div className="netTV__singleOption col-4">
                        <p>300 Mb/s</p>
                        <p>50 zł*</p>
                    </div>
                    <div className="netTV__singleOption netTV__singleOption--middle col-4">
                        <p>600 Mb/s</p>
                        <p>50 zł*</p>
                    </div>
                    <div className="netTV__singleOption  col-4">
                        <p>1000 Mb/s</p>
                        <p>60 zł*</p>
                    </div>
                </div>
                <div className="netTV__promotionTime">
                    <p className="netTV__text">Pierwszy miesiąc abonamentu za 0 zł!</p>
                </div>
                <div className="netTV__discount">
                    <p className="netTV__text">Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Router Wi-Fi oraz dekoder w cenie</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Koszt aktywacji to 61 zł*</p>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji</a>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Szybszy Internet w nizszej cenie 2.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji Szybszy internet w niższej cenie</a>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">77 kanałów (40HD)</p>
                </div>
                <div className="netTV__programspackage">
                    {/* <p className="netTV__text">Pakiety: Na start, Rozrywka, TVN</p> */}
                    <Link to="programList__ID" className="netTV__text netTV__text--programslist" smooth={true} duration={1500}>Pełna lista programów</Link>
                </div>
            </div>

            <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">Telewizja - Pakiet M +</p>
                <div className="netTV__speedOptions netTV__text row">
                    <div className="netTV__singleOption col-4">
                        <p>300 Mb/s</p>
                        <p>60 zł*</p>
                    </div>
                    <div className="netTV__singleOption netTV__singleOption--middle col-4">
                        <p>600 Mb/s</p>
                        <p>60 zł*</p>
                    </div>
                    <div className="netTV__singleOption  col-4">
                        <p>1000 Mb/s</p>
                        <p>70 zł*</p>
                    </div>
                </div>
                <div className="netTV__promotionTime">
                    <p className="netTV__text">Pierwsze 3 miesiące abonamentu za 0 zł w ofercie z internetem 300 Mb/s</p>
                    <p className="netTV__text">Pierwszy miesiąc abonamentu za 0 zł w ofercie z internetem 600 Mb/s oraz 1000 Mb/s</p>
                </div>
                <div className="netTV__discount">
                    <p className="netTV__text">Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Router Wi-Fi oraz dekoder w cenie</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Koszt aktywacji to 61 zł*</p>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III - rabat przez 3 miesiace.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji</a>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Szybszy Internet w nizszej cenie 2.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji Szybszy internet w niższej cenie</a>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">99 kanałów (59HD)</p>
                </div>
                <div className="netTV__programspackage">
                    {/* <p className="netTV__text">Pakiety: Na start, Rozrywka, TVN</p> */}
                    <Link to="programList__ID" className="netTV__text netTV__text--programslist" smooth={true} duration={1500}>Pełna lista programów</Link>
                </div>
            </div>

            <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">Telewizja - Pakiet L +</p>
                <div className="netTV__speedOptions netTV__text row">
                    <div className="netTV__singleOption col-4">
                        <p>300 Mb/s</p>
                        <p>90 zł*</p>
                    </div>
                    <div className="netTV__singleOption netTV__singleOption--middle col-4">
                        <p>600 Mb/s</p>
                        <p>90zł*</p>
                    </div>
                    <div className="netTV__singleOption  col-4">
                        <p>1000 Mb/s</p>
                        <p>100 zł*</p>
                    </div>
                </div>
                <div className="netTV__promotionTime">
                    <p className="netTV__text">Pierwsze 3 miesiące abonamentu za 0 zł w ofercie z internetem 300 Mb/s</p>
                    <p className="netTV__text">Pierwszy miesiąc abonamentu za 0 zł w ofercie z internetem 600 Mb/s oraz 1000 Mb/s</p>
                </div>
                <div className="netTV__discount">
                    <p className="netTV__text">Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Router Wi-Fi oraz dekoder w cenie</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Koszt aktywacji to 61 zł*</p>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III - rabat przez 3 miesiace.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji</a>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Szybszy Internet w nizszej cenie 2.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji Szybszy internet w niższej cenie</a>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">183 kanały (97HD)</p>
                </div>
                <div className="netTV__programspackage">
                    {/* <p className="netTV__text">Pakiety: Na start, Rozrywka, TVN</p> */}
                    <Link to="programList__ID" className="netTV__text netTV__text--programslist" smooth={true} duration={1500}>Pełna lista programów</Link>
                </div>
            </div>

            <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">Dla Kibica</p>
                <p className="netTV__text">Premium Eleven Sports</p>
                <div className="netTV__speedOptions netTV__text row">
                    <div className="netTV__singleOption col-4">
                        <p>300 Mb/s</p>
                        <p>100 zł*</p>
                    </div>
                    <div className="netTV__singleOption netTV__singleOption--middle col-4">
                        <p>600 Mb/s</p>
                        <p>110 zł*</p>
                    </div>
                    <div className="netTV__singleOption  col-4">
                        <p>1000 Mb/s</p>
                        <p>120 zł*</p>
                    </div>
                </div>
                <div className="netTV__promotionTime">
                    <p className="netTV__text">Pierwsze 2 miesiące abonamentu za 0 zł!</p>
                </div>
                <div className="netTV__discount">
                    <p className="netTV__text">Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Router Wi-Fi oraz dekoder w cenie</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Koszt aktywacji to 61 zł*</p>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III - Premium" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji Premium Eleven Sports</a>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">193 kanały (68HD)</p>
                </div>
                <div className="netTV__programspackage">
                    {/* <p className="netTV__text">Pakiety: Na start, Rozrywka, TVN, Sport i Emocje, Polsat Sport Premium, Cinemax HD</p> */}
                    <Link to="programList__ID" className="netTV__text netTV__text--programslist" smooth={true} duration={1500}>Pełna lista programów</Link>
                </div>

            </div>

            <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">Dla Kinomaniaka</p>
                <p className="netTV__text">w cenie pakiet L oraz HBO HD i GO</p>
                <div className="netTV__speedOptions netTV__text row">
                    <div className="netTV__singleOption col-4">
                        <p>300 Mb/s</p>
                        <p>110 zł*</p>
                    </div>
                    <div className="netTV__singleOption netTV__singleOption--middle col-4">
                        <p>600 Mb/s</p>
                        <p>120 zł*</p>
                    </div>
                    <div className="netTV__singleOption  col-4">
                        <p>1000 Mb/s</p>
                        <p>130 zł*</p>
                    </div>
                </div>
                <div className="netTV__promotionTime">
                    <p className="netTV__text">Pierwsze 3 miesiące abonamentu za 0 zł!</p>
                </div>
                <div className="netTV__discount">
                    <p className="netTV__text">Ceny zawierają rabat 5 zł miesięcznie za zgodyy marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Router Wi-Fi oraz dekoder w cenie</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Koszt aktywacji to 61 zł*</p>
                    <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III - rabat przez 3 miesiace.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji</a>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">186 kanałów (62HD)</p>
                </div>
                <div className="netTV__programspackage">
                    {/* <p className="netTV__text">Pakiety: Na start, Rozrywka, TVN, HBO HD, Kino, Seriale, Cinemax HD</p> */}
                    <Link to="programList__ID" className="netTV__text netTV__text--programslist" smooth={true} duration={1500}>Pełna lista programów</Link>
                </div>
                {/* <p className="internet__starText">* podane ceny są kwotami brutto</p> */}
            </div>

            <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">Multiroom</p>
                <p className="netTV__text">Do każdego pakietu istnieje możliwość wybrania dodatkowego dekodera </p>
                <p className="netTV__text">Opłata miesięczna za drugi dekoder wynosi 10 zł* </p>

            </div>
            <p className="internet__starText">* podane ceny są kwotami brutto</p>
            <p className="internet__starText">Prezentowane oferty Netii S.A.: „Nowa rozrywka III”, „Nowa rozrywka III - rabat przez 3 miesiące”, „Szybszy internet w niższej cenie 2” obowiązują przy zawarciu Umowy na czas określony 24 pełnych Okresów Rozliczeniowych, przy jednoczesnym korzystaniu z rabatu za e-fakturę (5 zł) oraz zgody marketingowe (5 zł). W przypadku rezygnacji lub niespełnienia warunków przyznania rabatów, cena wzrośnie o 10 zł. Prezentowane oferty nie uwzględniają cen za Usługi dodatkowe. Warunkiem korzystania z Promocji jest zamówienie: Usługi Internetowej z Usługą Bezpieczny Internet 2, Usługi Telewizyjnej z Usługą GigaNagrywarka Maxi. Szybki Internet Max (100, 150, 300, 600, 1000) stanowi wyłącznie nazwę marketingową. Do Pakietu M Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 5 kanałów: Nick Jr, Nickelodeon Polska, Nicktoons, Cinemax HD, Cinemax 2 HD. Do Pakietu L Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 2 kanały: Cinemax HD, Cinemax 2 HD. Usługa Internetowa oparta jest na parametrach jakości wynikających z maksymalnych parametrów technicznych danej technologii, w jakiej świadczona jest Usługa Internetowa lub wynikających z ofertowych ustawień technicznych łącza. Parametry świadczenia Usługi Internetowej, w szczególności parametry oraz wpływu innych Usług na Usługę Internetową, dostępne na stronie netia.pl</p>


            {/* <div className="netTV__tvOptionContainer">
                <p className="netTV__tvOption">PREMIUM</p>
                <p className="netTV__text">w cenie pakiet 184 kanały oraz HBO HD + HBO GO + Polsat Sport Premium + Eleven Sports</p>
                <div className="netTV__speedOptions netTV__text row">
                    <div className="netTV__singleOption col-4">
                        <p>300 Mb/s</p>
                        <p>140 zł*</p>
                    </div>
                    <div className="netTV__singleOption netTV__singleOption--middle col-4">
                        <p>500 Mb/s</p>
                        <p>90 zł*</p>
                    </div>
                    <div className="netTV__singleOption  col-4">
                        <p>1000 Mb/s</p>
                        <p>110 zł*</p>
                    </div>
                </div>
                <div className="netTV__promotionTime">
                    <p className="netTV__text">Pierwsze 2 miesiące za 0 zł!</p>
                </div>
                <div className="netTV__discount">
                    <p className="netTV__text">Ceny zawierają rabat 5 zł miesięcznie za zgodny marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Dodatkowo w cenie Netia EvoBox oraz router WiFi, Bezpieczny Internet, Giganagrywarka, Tidal</p>
                </div>
                <div className="netTV__priceContain">
                    <p className="netTV__text">Koszt aktywacji to 51 zł brutto</p>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">197 kanały (109HD)</p>
                </div>
                <div className="netTV__programspackage">
                    <p className="netTV__text">Pakiety: Na start, Rozrywka, TVN, HBO HD, Kino, Seriale, Cinemax HD</p>
                    <Link to="programList__ID" className="netTV__text netTV__text--programslist" smooth={true} duration={1500}>Pełna lista programów</Link>
                </div>
                <p className="internet__starText">* podane ceny są kwotami brutto</p>
            </div> */}

        </section>

    );
}

export default InternetTVOffers;