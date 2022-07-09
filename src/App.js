import { useState } from "react";
import "./App.css";


const MostVotedAnecdotes = ({ anecdotes, votes}) => {
  const maxVotes = Math.max(...votes)
  const mostVotedAnecdote = votes.indexOf(maxVotes)
  
  return (
    <div>
    <p>Most Voted Anecdote:</p>
      <p>{anecdotes[mostVotedAnecdote]}</p>
      </div>

  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {
    const randomNum = Math.round(Math.random() * anecdotes.length)
    setSelected(randomNum)
  }

  const voteCount = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVote(newVote)
  }


  return (
    <div>
      {anecdotes[selected]}
      <br />
      <button onClick={randomAnecdote}>Next</button>
      <button onClick={voteCount}>Vote</button>
      <h4>Anecdote with the most votes:</h4>
      <MostVotedAnecdotes anecdotes={anecdotes} votes={ votes} />
    </div>
  )
};
export default App;
