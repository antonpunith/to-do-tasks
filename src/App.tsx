import React from "react";
// components
import TaskList from "./components/TaskList";
import SortOrder from "./components/SortOrder";
import Total from "./components/Total";
import AddTask from "./components/AddTask";
// styles
import "./App.css";

const App = (props: any) => {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <AddTask />
      <SortOrder />
      <TaskList />

      <Total />
    </div>
  );
};

export default App;
