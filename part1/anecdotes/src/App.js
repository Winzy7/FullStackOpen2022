import { useState } from 'react'



const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const getRandomInt = (limit) => {
   return (Math.floor(Math.random() * limit));
}

const setValue = (value, set, newValue) => {
  set (value = newValue);
}

const Increment = (array, index) => {
  array[index] += 1;
  console.log(array[index])
}
//hello github desktop????

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const votes = Array(anecdotes.length).fill(0);
  const copy = {...votes};
  // console.log(votes);
  // console.log(selected);
  // console.log(copy);
console.log(copy[selected])
    return (
    <div>
      {anecdotes[selected]} <br/>
      {copy[selected]} <br/>
      <Button handleClick = {() => setValue(selected, setSelected, getRandomInt(anecdotes.length))} text = "Next Anecdote"/>
      <Button handleClick = {() => Increment(copy, selected)} text = "Vote"/>
    </div>
  )
}

export default App
