import React, { useState } from 'react'
import PersonList from './PersonList'
import AddForm from './AddForm'
import Search from './Search'

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
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h2>Add a new person</h2>
      <AddForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <PersonList persons={foundPersons} />
    </div>
  )
}

export default App