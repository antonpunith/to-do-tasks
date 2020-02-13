import React from "react";
// components
import TaskList from "./components/TaskList";
import SortOrder from "./components/SortOrder";
import Total from "./components/Total";

const App = (props: any) => {
  return (
    <div className="App">
      <TaskList />
      <SortOrder />
      <Total />
    </div>
  );
};

export default App;
