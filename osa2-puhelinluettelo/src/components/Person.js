import React from 'react'

const Person = ({ person }) => {
    const name = person.name
    const number = person.number

    return (
        <p>
            {name} {number}
        </p>
    )
}

export default Person