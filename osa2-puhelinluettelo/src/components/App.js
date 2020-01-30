import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244'
    }
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(p => p.name.localeCompare(newName) === 0
    )) {
      window.alert(`${newName} is already in the phone book!`)
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const foundPersons = persons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <input value={searchTerm} onChange={handleSearchChange} />
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          Number: <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {foundPersons.map((person) =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )

}

export default App