import React from "react";
// components
import TaskList from "./components/TaskList";
import SortOrder from "./components/SortOrder";
import Total from "./components/Total";
import AddTask from "./components/AddTask";

const App = (props: any) => {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
      <SortOrder />
      <Total />
    </div>
  );
};

export default App;
