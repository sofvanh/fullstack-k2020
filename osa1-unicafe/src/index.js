import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.listener}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  // TODO percentage mark for positive
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const average = (good - bad) / (good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100

  if (good + neutral + bad === 0) return (
    <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
  )
  // TODO missing all
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine title="Good" value={good} />
          <StatisticLine title="Neutral" value={neutral} />
          <StatisticLine title="Bad" value={bad} />
          <StatisticLine title="Average" value={average} />
          <StatisticLine title="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback!</h1>
      <Button text="Good" listener={addGood} />
      <Button text="Neutral" listener={addNeutral} />
      <Button text="Bad" listener={addBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)