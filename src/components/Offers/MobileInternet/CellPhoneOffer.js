import React from 'react';
import CellPhoneImage from '../../../images/mobile-alt-solid.svg'

const CellPhoneOffer = () => {
    return (
        <section className="cellPhone__container">
            <h1 className="offerInfo__style"> Telefon komórkowy</h1>
            <img src={CellPhoneImage} className="phone__image" alt="telefon komórkowy" />

            <div className="cellphone__offerContainer">
                <div className="cellphone__optionContainer">
                    <div className="cellphone__singleOption">
                        <p className="cellPhone__option">Standard</p>
                        <p className="cellPhone__option">20 zł*</p>
                    </div>
                    <div className="cellphone__singleOption cellphone__singleOption--second">
                        <p className="cellPhone__option">Premium</p>
                        <p className="cellPhone__option">25 zł*</p>
                    </div>
                    <div className="cellphone__singleOption cellphone__singleOption--third">
                        <p className="cellPhone__option">VIP</p>
                        <p className="cellPhone__option">50 zł*</p>
                    </div>
                </div>
                <div className="cellphone__informations">
                    <p className="cellphone__text">Przy przeniesieniu numeru pierwsze 3 miesiące za 0zł!</p>
                </div>
                <div className="cellphone__informations cellphone__informations--second">
                    <p className="cellphone__text">Możliwość dokupienia usługi telefonicznej do każdego pakietu internetu oraz telewizji z internetem</p>
                </div>
                <div className="cellphone__informations">
                    <p className="cellphone__text">Bezpłatnie przenosimy numer telefonu od poprzedniego operatora</p>
                </div>
                <div className="cellphone__informations">
                    <p className="cellphone__text">Koszt aktywacji oferty mobilnej to 9 zł</p>
                </div>
                {/* <div className="cellphone__informations">
                    <p className="cellphone__text">Koszt aktywacji oferty DUET PLUS oraz TRIO PLUS to 29 zł*</p>
                </div> */}

                <div className="cellphone__optionInformation">
                    <p className="optionInformation__text optionInformation__text--info">Informacje o taryfach</p>
                    <div className="cellphone__singleOptionInformation">
                        <p className="optionInformation__text" >Standard - nielimitowane połączenia głosowe do krajowych sieci komórkowych i stacjonarnych, nielimitowane
wiadomości SMS i MMS do krajowych numerów komórkowych, a także cykliczny pakiet internetowy 2 GB</p>
                    </div>

                    <div className="cellphone__singleOptionInformation">
                        <p className="optionInformation__text" >Premium - nielimitowane połączenia głosowe do krajowych sieci komórkowych i stacjonarnych,
                        nielimitowane wiadomości SMS i MMS do krajowych numerów komórkowych, a także cykliczny pakiet internetowy 12 GB.</p>
                    </div>

                    <div className="cellphone__singleOptionInformation">
                        <p className="optionInformation__text" >VIP - nielimitowane połączenia głosowe do krajowych sieci komórkowych i stacjonarnych, nielimitowane wiadomości SMS i MMS
                        do krajowych numerów komórkowych, a także cykliczny pakiet internetowy 72 GB.</p>
                    </div>

                </div>
                <p className="internet__starText">* podane ceny są kwotami brutto</p>
                <p className="internet__starText">Prezentowane oferty Netii S.A.: „Nowa rozrywka III”, „Nowa rozrywka III - rabat przez 3 miesiące” obowiązują przy zawarciu Umowy na czas określony 24 pełnych Okresów Rozliczeniowych, przy jednoczesnym korzystaniu z rabatu za e-fakturę (5 zł) oraz zgody marketingowe (5 zł). W przypadku rezygnacji lub niespełnienia warunków przyznania rabatów, cena wzrośnie o 10 zł. Prezentowane oferty nie uwzględniają cen za Usługi dodatkowe. Warunkiem korzystania z Promocji jest zamówienie: Usługi Internetowej z Usługą Bezpieczny Internet 2, Usługi Telewizyjnej z Usługą GigaNagrywarka Maxi. Szybki Internet Max (100, 150, 300, 600, 1000) stanowi wyłącznie nazwę marketingową. Do Pakietu M Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 5 kanałów: Nick Jr, Nickelodeon Polska, Nicktoons, Cinemax HD, Cinemax 2 HD. Do Pakietu L Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 2 kanały: Cinemax HD, Cinemax 2 HD. Usługa Internetowa oparta jest na parametrach jakości wynikających z maksymalnych parametrów technicznych danej technologii, w jakiej świadczona jest Usługa Internetowa lub wynikających z ofertowych ustawień technicznych łącza. Parametry świadczenia Usługi Internetowej, w szczególności parametry oraz wpływu innych Usług na Usługę Internetową, dostępne na stronie netia.pl</p>

            </div>

        </section>

    );
}

export default CellPhoneOffer;