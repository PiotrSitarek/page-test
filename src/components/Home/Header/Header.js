import React, { useEffect } from 'react';
import mobileLogo from '../../../images/logo_mobile.png';
import desktopLogo from '../../../images/logo_desktop.png';
import { Link } from 'react-router-dom';



const Header = () => {

    useEffect(() => {
        const cookie = sessionStorage.getItem("cookieNotification")
        const header__cookieinfo = document.querySelector(".header__cookieinfo")
        if (cookie === "Accept") {
            header__cookieinfo.style.display = "none";
        } else {
            header__cookieinfo.style.display = "flex";
        }
    }, [])

    const burger = () => {
        const burger = document.querySelector(".burgerIcon__lineContainer")
        burger.classList.toggle("is-active");
        const opener = document.querySelector(".mobileMenu__dropdown")

        if (opener.style.width === "100%") {
            opener.style.width = "0%";
        } else {
            opener.style.width = "100%";
        }
    }
    const cookieButtonFunction = () => {
        const header__cookieinfo = document.querySelector(".header__cookieinfo")
        header__cookieinfo.style.display = "none";
        sessionStorage.setItem("cookieNotification", "Accept");
    }
    return (

        <header className="header container">

            <div className="header__cookieinfo">
                <p className="header__cookietext">Ta strona używa plików cookie</p>
                <div className="header__linkcontainer">
                    <a className="header__cookielink" href="https://netia-oferta.pl/polityka_prywatnosci.pdf" target="_blank" rel="noopener noreferrer">Polityka Prywatności</a>
                    {/* <a className="header__cookielink header__cookielink--middle" href="http://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/" target="_blank" rel="noopener noreferrer">Jak wyłączyć cookies?</a>
                    <a className="header__cookielink" href="https://jakwylaczyccookie.pl/jak-bezpiecznie-korzystac-z-cookies/" target="_blank" rel="noopener noreferrer">Bezpieczeństwo</a> */}
                </div>
                <button onClick={cookieButtonFunction} className="header__cookiebutton header__cookiebutton--mobile" >Rozumiem</button>
            </div>
            <div className="imageNavContainer row">
                <p className="header_info">Autoryzowany Partner</p>
                <img src={mobileLogo} alt="małe logo netia" className="col-4 mobileLogo" />
                <img src={desktopLogo} alt="duże logo netia" className="col-3 desktopLogo" />

                <div className="burgerIcon">
                    <div onClick={burger} className="burgerIcon__lineContainer burgerIcon__action">
                        <span className="burgerIcon__line"></span>
                        <span className="burgerIcon__line"></span>
                        <span className="burgerIcon__line"></span>
                    </div>
                </div>

                <div className="mobileMenu__dropdown">
                    <ul className="mobileDropdown__content">
                        <Link to="/" className="mobileMenu__link">Strona główna</Link>
                        <Link to="/Oferty" className="mobileMenu__link">Oferty</Link>
                        {/* <Link to="/Uslugi" className="mobileMenu__link">Usługi</Link> */}
                        <Link to="/Kontakt" className="mobileMenu__link">Kontakt</Link>
                    </ul>
                </div>

                <nav className="container desktopNavigation">
                    <ul className="header__navigationBar row">
                        <li className="header__liTextAllign"><Link to="/" className="navigation__link link__positioner" >Strona główna</Link></li>
                        <li><div className="navigation__dropdownLink link__positioner">
                            <button className="dropdown__button">Internet i telewizja</button>
                            <div className="dropdown__content">
                                <Link to="/Internet" className="dropdown__link" href="#">Internet</Link>
                                <Link to="/InternetTelewizja" className="dropdown__link" href="#">Internet i telewizja</Link>
                                <Link to="/TelefonStacjonarny" className="dropdown__link" href="#">Telefon stacjonarny</Link>
                                <Link to="/TelefonKomorkowy" className="dropdown__link" href="#">Telefon komórkowy</Link>
                            </div>
                        </div>
                        </li>
                        {/* <Link to="/Uslugi" className="navigation__link link__positioner" >Usługi</Link> */}
                        <li> <Link to="/Kontakt" className="navigation__link link__positioner" >Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;
