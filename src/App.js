import { useState } from "react";
import "./App.css";

const Header = (props) => {
  return (
    <div>
      <h3>{ props.title}</h3>
    </div>
  )
};

const Statistics = ({good, bad, neutral}) => {
  const countAll = () => {
    return good + neutral + bad;
  }

  const countAverage = () => {
    return ((good + neutral) - bad) / 3
  }

  const calculatePositive = () => {
    return (good + neutral) / (good + bad + neutral) * 100
  }
  return (
    <div>
        <p>Good: { good}</p>
        <p>Neutral: { neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {countAll()}</p>
        <p>Average: {countAverage()}</p>
        <p>Positive: {calculatePositive()}</p>
        
      </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0);
  
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGood = () => {
    setGood(good + 1);
  };

  const countNeutral = () => {
    setNeutral(neutral + 1);
  };

  const countBad = () => {
    setBad(bad + 1);
  }
  const condition = good !== 0 || bad !== 0 || neutral !== 0;
  return (
    <div className="App">
      <Header title="Give Feedback" />
      <div>
        <button onClick={countGood}>good</button>
        <button onClick={countNeutral}>neutral</button>
        <button onClick={countBad}>bad</button>
      </div>
      {condition && <Statistics good={ good} bad={bad} neutral={neutral} />}
      {/* <Content /> */}
    </div>
  );
};
export default App;
