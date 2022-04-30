import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good)
  const setValue = (value, set) => {
    set(value + 1)
  }

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  return ( 
    <div>
      <p><strong>give feedback </strong></p>
      <Button handleClick = {() => setValue(good, setGood)} text = "good"/>
      <Button handleClick = {() => setValue(neutral, setNeutral)} text = "neutral"/>
      <Button handleClick = {() => setValue(bad, setBad)} text = "bad"/>
      <p><strong>statistics</strong></p>
      <p>
          good {good}<br/>
          neutral {neutral}<br/>
          bad {bad}<br/>
      </p>

    </div>
  )
}

export default App
