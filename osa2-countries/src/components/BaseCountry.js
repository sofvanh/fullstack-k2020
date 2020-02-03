import React from 'react'
import SingleCountry from './SingleCountry'

const BaseCountry = ({ countries, onShow }) => {
    if (countries.length >= 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (countries.length > 1) {
        return (
            <div>
                {countries.map((country) =>
                    <p key={country.name}>
                        {country.name} <button onClick={() => onShow(country.name)}>show</button>
                    </p>
                )}
            </div>
        )
    } else if (countries.length === 1) {
        return (
            <SingleCountry country={countries[0]} />
        )
    } else {
        return (
            <p>No countries found!</p>
        )
    }
}

export default BaseCountry