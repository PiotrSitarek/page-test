import React from 'react';
import phoneImage from '../../../images/phone-solid.svg'

const PhoneOffer = () => {

    return (
        <section className="telephone__container">
            <h1 className="offerInfo__style"> Telefon stacjonarny</h1>
            <img src={phoneImage} className="phone__image" alt="telefon stacjonarny" />

            <div className="telephone__offer">
                <p className="telephone__option">Rozmowy bez limitu</p>
                <p className="telephone__option telephone__option--middle">10 zł*</p>
                <p className="telephone__optionInfo">Możliwość dokupienia usługi telefonicznej do każdego pakietu internetu oraz telewizji z internetem</p>
                <p className="telephone__optionInfo">Bezpłatnie przenosimy numer telefonu od poprzedniego operatora</p>
                <p className="telephone__optionInfo">Koszt aktywacji to 9 zł*</p>
            </div>
            <p className="internet__starText internet__starText--telephone">* podane ceny są kwotami brutto</p>
            <p className="internet__starText">Prezentowane oferty Netii S.A.: „Nowa rozrywka III”, „Nowa rozrywka III - rabat przez 3 miesiące” obowiązują przy zawarciu Umowy na czas określony 24 pełnych Okresów Rozliczeniowych, przy jednoczesnym korzystaniu z rabatu za e-fakturę (5 zł) oraz zgody marketingowe (5 zł). W przypadku rezygnacji lub niespełnienia warunków przyznania rabatów, cena wzrośnie o 10 zł. Prezentowane oferty nie uwzględniają cen za Usługi dodatkowe. Warunkiem korzystania z Promocji jest zamówienie: Usługi Internetowej z Usługą Bezpieczny Internet 2, Usługi Telewizyjnej z Usługą GigaNagrywarka Maxi. Szybki Internet Max (100, 150, 300, 600, 1000) stanowi wyłącznie nazwę marketingową. Do Pakietu M Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 5 kanałów: Nick Jr, Nickelodeon Polska, Nicktoons, Cinemax HD, Cinemax 2 HD. Do Pakietu L Abonent otrzymuje promocyjnie na 24 Okresy Rozliczeniowe 2 kanały: Cinemax HD, Cinemax 2 HD. Usługa Internetowa oparta jest na parametrach jakości wynikających z maksymalnych parametrów technicznych danej technologii, w jakiej świadczona jest Usługa Internetowa lub wynikających z ofertowych ustawień technicznych łącza. Parametry świadczenia Usługi Internetowej, w szczególności parametry oraz wpływu innych Usług na Usługę Internetową, dostępne na stronie netia.pl</p>

        </section>

    );
}

export default PhoneOffer;