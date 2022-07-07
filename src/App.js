// import logo from './logo.svg';
// import './App.css';

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
      {/* <Content /> */}
    </div>
  );
};

const Part = (props) => {
  return (<div>
    <h5>Title: {props.part}</h5>
  </div>);
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total Number of Exercises: {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
