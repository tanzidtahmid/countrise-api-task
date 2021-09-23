import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Navebar/Navbar';

const CountryDetails = () => {
    const {country} = useParams()
    const [countries, serCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3/all')
        .then(res=>res.json())
        .then(data=>serCountries(data))
    },[])
    const details = countries.filter(countryName=>countryName.name.common ===country )
    console.log(details)
    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
                {
                    details.map(detail=>
                        <div className='row'>
                            <div className='col-md-6' >
                            <img src={detail.flags[1]} className='img-fluid' alt="" style={{height:'300px', width:'500px'}} />
                            </div>
                            <div className='col-md-6 d-flex' >
                                <div>
                                <h4>{detail.name.common}</h4>
                                <p>Capital: {detail.capital[0]}</p>
                                <p>Region: {detail.region}</p>
                                <p>Subregion: {detail.subregion}</p>
                                    {/* <p>Population: {detail.population}</p> */}
                                    <p>Area: {detail.area} sqm</p>
                                </div>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default CountryDetails;