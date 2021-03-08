import React from 'react';
import { Link } from 'react-router-dom';

const flagStyle = {
    height:'40px'
}

const countryStyle = {
    border : '1px solid red', margin: '10px', padding: '5px'
}

const Country = (props) => {
    const {name, flag, population, region} = props.country;
    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <Link to={`/name/${name}`}><button className="btn btn-success" o> Detail Info</button></Link>
            
            
        </div>
    );
};

export default Country;