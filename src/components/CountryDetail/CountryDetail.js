import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
          .then(res => res.json())
          .then(data => setCountry(data[0]))
      }, [])
    
    return (
        <div className="text-center">
            <h2>{country.name}</h2> <p>country detail</p>
            <img style={{maxWidth:'200px'}} src={country.flag} alt=""></img>
            <p>Area: {country.area}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
        </div>
    );
};

export default CountryDetail;