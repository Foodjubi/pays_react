import React from 'react';

const Cards = (props) => {
    const {country} = props;

    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };


    return (
        <li className="card">
            <img src={country.flag} alt="flag"/>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>{numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Cards;