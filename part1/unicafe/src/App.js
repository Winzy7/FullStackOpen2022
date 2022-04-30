import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good, neutral, bad, good + neutral + bad);

  //sets state to value of given function set
  const setValue = (value, set) => {
    set(value + 1)
  }

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );

  const StatisticLine = (props) => {
    return (
      <div>{props.text} {props.value}{props.extratext}</div>
    );  
  }

  const Statistics = (props) => {
    if (props.total == 0)
      return <div>No feedback given</div>
    return (
    <div>
      <StatisticLine text = "good" value = {props.good}/>
      <StatisticLine text = "neutral" value = {props.neutral}/>
      <StatisticLine text = "bad" value = {props.bad}/>
      <StatisticLine text = "all" value = {props.total}/>
      <StatisticLine text = "average" value = {(props.good + props.neutral + props.bad) / 3}/>
      <StatisticLine text = "positive" value = {props.good/(props.good + props.neutral + props.bad) * 100} extratext = "%"/>
    </div>
    );
  }

  return (
    <div>
      <p><b><font size = "+3">give feedback</font></b></p>
      <Button handleClick = {() => setValue(good, setGood)} text = "good"/>
      <Button handleClick = {() => setValue(neutral, setNeutral)} text = "neutral"/>
      <Button handleClick = {() => setValue(bad, setBad)} text = "bad"/>
      <p><b><font size = "+3">statistics</font></b></p>
      <Statistics good = {good} bad = {bad} neutral = {neutral} total = {good + neutral + bad}/>
    </div>
  );
}

export default App
