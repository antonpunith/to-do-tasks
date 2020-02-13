import React from "react";
import { connect } from "react-redux";

const App = (props: any) => {
  const { tasks } = props;
  return (
    <div className="App">
      <ul>
        {tasks.map((task: any, index: number) => (
          <li key={index}>
            {task.text} {task.completed ? "completed" : "to-do"}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
