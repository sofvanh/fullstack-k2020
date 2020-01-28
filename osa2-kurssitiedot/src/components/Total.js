import React from 'react'

const Total = ({ parts }) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <p>Total of {sum} exercises</p>
    )
}

export default Total