import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
    return (
        <div>
            <div className="text-center">
            <h1>Country Loaded: {countries.length}</h1>
            </div>
            <div style={{ justifyContent: 'center' }} className="App row cols row-cols-md-4 cols-sm-2">
                {
                    countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;