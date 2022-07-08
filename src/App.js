import { useState } from "react";
import './App.css';

const Display = ({greeting, count}) => {
  return (
    <div>
      <h3>{greeting}</h3>
      <p>{count}</p>
    </div>
  )
}

const Hello = ({ name, age }) => {
  const bornYear = () =>  new Date().getFullYear() - age;
  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probable born in { bornYear()}</p>
    </div>
  )
}

const Button = ({ count, text}) => {
  return (
    <button onClick={count}>{text}</button>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10;
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Display count={count} greeting="Greetings" />
      <div>
        <Button text="increaseCount" count={ () => setCount(count + 1)} />
        <Button text="ResetCount" count={ () =>setCount(0)} />
        </div>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App;
