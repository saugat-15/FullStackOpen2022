import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>hello { props.name}</p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="saugat"/>
      <Hello name="prasanga"/>
      <Hello name="rujan"/>
      <Hello name="bibek"/>
    </div>
  )
  
}

export default App;
