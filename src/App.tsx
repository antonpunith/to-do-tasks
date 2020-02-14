import React from "react";
// components
import TaskList from "./components/TaskList";
import SortOrder from "./components/SortOrder";
import Total from "./components/Total";
import AddTask from "./components/AddTask";
// redux connect
import { connect } from "react-redux";
// actions
import * as actions from "./actions";
// styles
import "./App.css";

const App = (props: any) => {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <AddTask {...props} />
      <SortOrder {...props} />
      <TaskList {...props} />
      <Total {...props} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps, actions)(App);
