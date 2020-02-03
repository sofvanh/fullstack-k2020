import React from 'react'

const Person = ({ person, deleteAction }) => {
    const name = person.name
    const number = person.number

    return (
        <p>
            {name} {number} <button onClick={() => deleteAction(person.id)}>Delete</button>
        </p>
    )
}

export default Person