import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
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
  const [vote, setVote] = useState(votes);
  console.log(vote)
  console.log(vote[selected])

  const incrementVotes = () => {
    const copy = {...vote};
    copy[selected] += 1;
    return setValue(vote, setVote, copy);
  }

  const mostVoted = () => {
    console.log(vote[0])
    let largestIndex = 0;
    for (let i = 0; i < anecdotes.length; i += 1) {
      if (vote[i] > vote[largestIndex]) largestIndex = i;
    }
    return largestIndex;
  }

  return (
    <div>
      <b><font size = "+2">Anecdote of the day</font></b> <br/> <br/>
      {anecdotes[selected]} <br/>
      has {vote[selected]} votes <br/>
      <Button handleClick = {() => setValue(selected, setSelected, getRandomInt(anecdotes.length))} text = "Next Anecdote"/>
      <Button handleClick = {() => incrementVotes()} text = "Vote"/>
      <br/><br/><b><font size = "+2">Anecdote with the most votes</font></b> <br/> <br/>
      {anecdotes[mostVoted()]}
    </div>
  )
}

export default App
