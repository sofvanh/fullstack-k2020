import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BaseCountry from './BaseCountry';

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const newCountries = response.data.filter(country =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCountries(newCountries)
      })
  }, [searchTerm])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const onShow = name => {
    setSearchTerm(name)
  }

  return (
    <div>
      find countries <input value={searchTerm} onChange={handleSearchChange} />
      <BaseCountry countries={countries} onShow={onShow} />
    </div>
  )
}

export default App;
