import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners'
import searchImage from '../../../images/search-solid.svg';
import { uniqBy } from "lodash";
// import correct from '../../../images/iconsok.svg';



const AddressCheck = () => {

    const history = useHistory();
    const [allDataBase, setAllDataBase] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [streetList, setStreetList] = useState([]);

    // useEffect(() => {

    //     fetch(`http://localhost:3000/database`)
    //         .then((response) => response.json())
    //         .then((response) => setAllDataBase(response))

    // }, []);

    // useEffect(() => {
    //     // fetch(`https://piotrsitarek.pl/database.json`)
    //     fetch(`https://sitar05.vot.pl/database.json`)
    //         .then((response) => response.json())    //        
    //         .then((response) => setAllDataBase(response.database))
    // }, []);

    useEffect(() => {

        fetch(`https://netia-oferta.pl/database.json`)
            .then((response) => response.json())
            .then((response) => setAllDataBase(response.database))
    }, []);



    const uniqueCities = uniqBy(allDataBase, 'CITY_NAME')
    const uniqueStreets = uniqBy(allDataBase, 'STREET_NAME')

    useEffect(() => {
        setCityList(uniqueCities)
        setStreetList(uniqueStreets)
    }, [allDataBase]);

    const [citySuggestions, setCitySuggestions] = useState([]);
    const [cityText, setCityText] = useState('');

    const onChangeCity = (value) => {
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            const cityListToSuggest = cityList.map(function (element) {
                return element.CITY_NAME
            })
            suggestions = cityListToSuggest.filter((element) => {
                return regex.test(element)
            })
        } setCitySuggestions(suggestions); setCityText(value)
    };

    const citySuggestionSelect = (value) => {
        setCityText(value);
        setCitySuggestions([])
    }

    const renderCitySuggestions = () => {
        if (citySuggestions.length === 0) {
            return null
        }
        return (
            <ul className="suggestionsList">
                {citySuggestions.slice(0, 3).map((element) => <li className="suggestionListElement" key={element} onClick={() => citySuggestionSelect(element)}>{element}</li>)}
            </ul>
        )
    }
    const [streetSuggestions, setStreetSuggestions] = useState([]);
    const [streetText, setStreetText] = useState('');

    const onChangeStreet = (value) => {
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            const streetListToSuggest = streetList.map(function (element) {
                return element.STREET_NAME
            })
            suggestions = streetListToSuggest.filter((element) => {
                return regex.test(element)
            })
        } setStreetSuggestions(suggestions); setStreetText(value)
    };

    const streetSuggestionSelect = (value) => {
        setStreetText(value);
        setStreetSuggestions([])
    }

    const renderStreetSuggestions = () => {
        if (streetSuggestions.length === 0) {
            return null
        }
        return (
            <ul className="suggestionsList">
                {streetSuggestions.slice(0, 3).map((element) => <li className="suggestionListElement" key={element} onClick={() => streetSuggestionSelect(element)}>{element}</li>)}
            </ul>
        )
    }
    // ^[1-9]{1}[0-9]{8}$
    // const buildingNumberFormula = /[0-9]*[a-zA-Z]/i;
    const buildingNumberFormula = /[0-9]+[abc]*/;
    const required = value => (value ? undefined : 'Musisz uzupełnić to pole aby sprawdzić dostępność')
    const buildingNumberValidator = value => (buildingNumberFormula.test(value) ? undefined : 'Musisz uzupełnić to pole poprawnie aby sprawdzić dostępność')

    useEffect(() => { // czyszczenie sugestii przy znaznaczeniu drugiego inputa
        const city = document.querySelector(".cityNameInput");
        city.addEventListener("click", function () {
            setStreetSuggestions([]);
        })
        const street = document.querySelector(".streetNameInput");
        street.addEventListener("click", function () {
            setCitySuggestions([]);
        })
    }, [])

    return (
        <Form onSubmit={fields => {

            const myAddress = allDataBase.filter((element) => {
                // tutaj ustawię regułę aby wielkość litery w numerze budynku nie miała znaczenia            
                const correctBuildingNumber = fields.buildingNumber.toUpperCase();

                return (cityText === element.CITY_NAME && streetText === element.STREET_NAME && correctBuildingNumber === element.BUILDING_NUMBER)
            })

            if (myAddress.length > 0) {
                const addressCheck = document.querySelector(".localizationBoxContainer");
                addressCheck.innerHTML = "";
                const thanks = document.createElement("p");
                const toOfferButton = document.createElement("button");

                const toContactButton = document.createElement("button");

                toOfferButton.classList.add("toOfferButton");
                toContactButton.classList.add("toContactButton");

                thanks.classList.add("thanks__style");
                thanks.classList.add("thanks__padding");

                const correctImage = document.createElement("i");
                addressCheck.appendChild(correctImage);
                correctImage.classList.add("far")
                correctImage.classList.add("fa-check-circle")



                addressCheck.appendChild(thanks);
                thanks.innerHTML = "Zapraszamy do skorzystania z naszych usług pod wskazanym adresem";
                addressCheck.appendChild(toOfferButton);
                toOfferButton.innerHTML = "Przejdz do oferty";

                addressCheck.appendChild(toContactButton);
                toContactButton.innerHTML = "Skontaktuj się z nami";

                const offerButton = document.querySelector(".toOfferButton");
                offerButton.addEventListener("click", function () {
                    history.push("/Oferty")
                });

                const contactButton = document.querySelector(".toContactButton");
                contactButton.addEventListener("click", function () {
                    history.push("/Kontakt")

                });



            } else {

                const addressCheck = document.querySelector(".localizationBoxContainer")
                addressCheck.innerHTML = ""
                const thanks = document.createElement("p")
                thanks.classList.add("thanks__style")
                thanks.classList.add("thanks__padding")


                const wrongImage = document.createElement("i");
                addressCheck.appendChild(wrongImage);
                wrongImage.classList.add("far")
                wrongImage.classList.add("fa-times-circle")


                addressCheck.appendChild(thanks);
                thanks.innerHTML = "Niestety, pod wskazanym adresem nie posiadamy usług."

            }
        }}
            render={({ handleSubmit, pristine, invalid }) => (
                <section className="addressCheck container">
                    <form onSubmit={handleSubmit} className="localizationBoxContainer row ">
                        <img src={searchImage} alt="lupa wyszukująca adres" className="col-2 searchImage" id="searchImageDisplay" />

                        <label className="addressCheck__label"><h1 className="searchInfo">Sprawdź dostępność usług Netii w swojej lokalizacji!</h1>
                            <Field name="cityName" validate={required}>
                                {({ input, meta }) => (
                                    <div className="suggestionsPositioner" >
                                        <input {...input} type="text" className="formInputs cityNameInput" value={cityText} placeholder="Wpisz nazwę miasta..." />
                                        {meta.error && meta.touched && <span className="addresscheck__error">{meta.error}</span>}
                                        {renderCitySuggestions()}
                                    </div>
                                )}
                            </Field>
                            <OnChange name="cityName">{(value, previous) => { onChangeCity(value) }}</OnChange>
                            <Field name="streetName" validate={required}>
                                {({ input, meta }) => (
                                    <div className="suggestionsPositioner">
                                        <input {...input} type="text" className="formInputs streetNameInput" value={streetText} placeholder="Wpisz nazwę ulicy..." />
                                        {meta.error && meta.touched && <span className="addresscheck__error">{meta.error}</span>}
                                        {renderStreetSuggestions()}
                                    </div>
                                )}
                            </Field>
                            <OnChange name="streetName">{(value, previous) => { onChangeStreet(value) }}</OnChange>
                            <Field name="buildingNumber" validate={buildingNumberValidator}>
                                {({ input, meta }) => (
                                    <div className="suggestionsPositioner">
                                        <input {...input} type="text" className="formInputs" placeholder="Wpisz numer budynku..." />
                                        {meta.error && meta.touched && <span className="addresscheck__error">{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </label>
                        <button type="submit" className="checkAddressButton">Sprawdź</button>
                    </form>
                </section>
            )}
        />
    );
}
export default AddressCheck;