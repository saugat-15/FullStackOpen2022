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
  return (
    <div>
      <h5>Title: {props.part}</h5>
    </div>
  );
};

const Content = (props) => {
  // const part1 = "Fundamentals of React";
  // const part2 = "Using props to pass data";
  // const part3 = "State of a component";
  return (
    <div>
      <Part part={props.parts[0].name} />
      <Part part={props.parts[1].name} />
      <Part part={props.parts[2].name}/>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total Number of Exercises:{" "}
        {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        parts = {parts}
      />
    </div>
  );
};

export default App;
