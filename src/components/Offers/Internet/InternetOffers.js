import React from 'react';
import wifiImage from '../../../images/wifi-solid.svg';

const InternetOffers = () => {

    return (
        <section className="internet__container container">
            <h1 className="offerInfo__style">Internet światłowodowy</h1>
            <div className="internet__contractTime internet__text row">
                <img src={wifiImage} className="internet__wifiImage" alt="łączność wifi" />
                <p className="internet__text internet__contractTimeOption">Oferta na 24 miesiące</p>
            </div>
            <div className="internet__speedOptions internet__text row">
                {/* <div className="internet__singleOption  internet__singleOption--first col-4">
                    <p>150 Mb/s</p>
                    <p>45 zł*</p>
                </div> */}
                <div className="internet__singleOption col-4">
                    <p>300 Mb/s</p>
                    <p>50 zł*</p>
                </div>
                <div className="internet__singleOption internet__singleOption--middle col-4">
                    <p>600 Mb/s</p>
                    <p>50 zł*</p>
                </div>
                <div className="internet__singleOption  col-4">
                    <p>1000 Mb/s</p>
                    <p>60 zł*</p>
                </div>
            </div>
            <div className="internet__promotionTime">
                <p className="internet__text">Pierwsze 3 miesiące abonamentu za 0 zł!</p>
            </div>
            <div className="internet__discount">
                <p className="internet__text">Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
            </div>
            <div className="internet__priceContain">
                <p className="internet__text">Router Wi-Fi w cenie</p>
            </div>
            <div className="internet__priceContain">
                <p className="internet__text">Koszt aktywacji to 59 zł*</p>
                <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji Nowa Rozrywka III</a>
                <a className="internet__text_link" href="https://netia-oferta.pl/SWP Szybszy Internet w nizszej cenie 2.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji Szybszy internet w niższej cenie</a>
            </div>


            <div className="internet__contractTime internet__text row">
                <p className="internet__text internet__contractTimeOption">Oferta na czas nieokreślony</p>
            </div>
            <div className="internet__speedOptions internet__text row">
                <div className="internet__singleOption col-4">
                    <p>300 Mb/s</p>
                    <p>60 zł*</p>
                </div>
                <div className="internet__singleOption internet__singleOption--middle col-4">
                    <p>600 Mb/s</p>
                    <p>70 zł*</p>
                </div>
                <div className="internet__singleOption  col-4">
                    <p>1000 Mb/s</p>
                    <p>80 zł*</p>
                </div>
            </div>

            <div className="internet__discount">
                <p className="internet__text">Ceny zawierają rabat 5 zł miesięcznie za zgody marketingowe oraz 5 zł miesięcznie za e-fakturę</p>
            </div>
            <div className="internet__priceContain">
                <p className="internet__text">Router Wi-Fi w cenie</p>
            </div>
            <div className="internet__priceContain">
                <p className="internet__text">Koszt aktywacji to 59 zł*</p>
                <a className="internet__text_link" href="https://netia-oferta.pl/SWP Nowa rozrywka III - Internet bez zobowiazania.pdf" target="_blank" rel="noopener noreferrer">Szczegółowe Warunki Promocji</a>
            </div>
            <p className="internet__starText">* podane ceny są kwotami brutto</p>
            <p className="internet__starText">Prezentowane oferty Netii S.A.: „Nowa rozrywka III”, „Nowa rozrywka III - rabat przez 3 miesiące”, „Szybszy internet w niższej cenie 2” obowiązują przy zawarciu Umowy na czas określony 24 pełnych Okresów Rozliczeniowych, przy jednoczesnym korzystaniu z rabatu za e-fakturę (5 zł) oraz zgody marketingowe (5 zł). W przypadku rezygnacji lub niespełnienia warunków przyznania rabatów, cena wzrośnie o 10 zł. Prezentowane oferty nie uwzględniają cen za Usługi dodatkowe. Warunkiem korzystania z Promocji jest zamówienie: Usługi Internetowej z Usługą Bezpieczny Internet 2, Usługi Telewizyjnej z Usługą GigaNagrywarka Maxi. Szybki Internet Max (100, 150, 300, 600, 1000) stanowi wyłącznie nazwę marketingową. Do Pakietu M Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 5 kanałów: Nick Jr, Nickelodeon Polska, Nicktoons, Cinemax HD, Cinemax 2 HD. Do Pakietu L Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 2 kanały: Cinemax HD, Cinemax 2 HD. Usługa Internetowa oparta jest na parametrach jakości wynikających z maksymalnych parametrów technicznych danej technologii, w jakiej świadczona jest Usługa Internetowa lub wynikających z ofertowych ustawień technicznych łącza. Parametry świadczenia Usługi Internetowej, w szczególności parametry oraz wpływu innych Usług na Usługę Internetową, dostępne na stronie netia.pl</p>

        </section>
    );
}

export default InternetOffers;