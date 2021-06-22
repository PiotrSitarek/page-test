import React from 'react';
import programList from '../../../images/pakiety.jpg';

const ProgramList = () => {
    return (
        <section className="programlist__container" id="programList__ID" >
            <h1 className="programList__style">Lista programów</h1>
            <img src={programList} className="programList__image" alt="lista programów"></img>
        </section>
    );
}

export default ProgramList;