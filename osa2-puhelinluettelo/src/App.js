import React, { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import AddForm from './components/AddForm'
import Search from './components/Search'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const existing = persons.filter(p => p.name.localeCompare(newName) === 0)
    if (existing.length > 0) {
      const person = existing[0]
      const id = person.id
      const changedPerson = { ...person, number: newNumber }
      if (window.confirm(`${person.name} is already in the phonebook, replace the old number with a new one?`)) {
        personService
          .update(id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
          })
          .catch(error => {
            setError(
              `${person.name} has already been removed!`
            )
            setTimeout(() => {
              setError(null)
            }, 5000)
            console.log(`Person was already removed from server`, error)
            setPersons(persons.filter(p => p.id !== id))
          })
      } else {
        window.alert(`${newName} is already in the phone book!`)
      }
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        setMessage(
          `Added ${personObject.name}!`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        setError(error.response.data)
      })
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

  const handleDelete = id => {
    if (window.confirm("Are you sure?")) {
      personService
        .remove(id)
        .then(() => {
          personService
            .getAll()
            .then(persons => setPersons(persons))
          setMessage(
            `Person removed!`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const foundPersons = persons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} className='message' />
      <Notification message={error} className='error' />
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
      <PersonList persons={foundPersons} deleteAction={handleDelete} />
    </div>
  )
}

export default App