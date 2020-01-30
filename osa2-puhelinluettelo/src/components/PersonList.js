import React from 'react'
import Person from './Person'

const PersonList = ({ persons }) => {
    return (
        <div>
            {persons.map((person) =>
                <Person key={person.name} person={person} />
            )}
        </div>
    )
}

export default PersonList