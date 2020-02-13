import React from "react";
// components
import TaskList from "./components/TaskList";
import SortOrder from "./components/SortOrder";

const App = (props: any) => {
  return (
    <div className="App">
      <TaskList />
      <SortOrder />
    </div>
  );
};

export default App;
