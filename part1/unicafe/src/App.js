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

  const Buttons = () => (
    <div>
    <Button handleClick = {() => setValue(good, setGood)} text = "good"/>
    <Button handleClick = {() => setValue(neutral, setNeutral)} text = "neutral"/>
    <Button handleClick = {() => setValue(bad, setBad)} text = "bad"/>
    </div>
  )

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}{props.extratext}</td>
      </tr>
    );  
  }

  const Statistics = () => {
    const total = good + neutral + bad;
    if (total == 0)
      return <div>No feedback given</div>
    return (
      <table><tbody>
      <StatisticLine text = "good" value = {good}/>
      <StatisticLine text = "neutral" value = {neutral}/>
      <StatisticLine text = "bad" value = {bad}/>
      <StatisticLine text = "all" value = {total}/>
      <StatisticLine text = "average" value = {(good - bad) / (good + neutral + bad)}/>
      <StatisticLine text = "positive" value = {good/(good + neutral + bad) * 100} extratext = "%"/>
      </tbody></table>
    );
  }

  return (
    <div>
      <p><b><font size = "+3">give feedback</font></b></p>
      <Buttons/>
      <p><b><font size = "+3">statistics</font></b></p>
      <Statistics/>
    </div>
  );
}

export default App
