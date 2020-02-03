import React from 'react'
import Person from './Person'

const PersonList = ({ persons, deleteAction }) => {
    return (
        <div>
            {persons.map((person) =>
                <Person 
                    key={person.name} 
                    person={person}
                    deleteAction={deleteAction} />
            )}
        </div>
    )
}

export default PersonList