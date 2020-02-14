import React from "react";
// styles
import "./styles.css";

const Total = (props: any) => {
  const { tasks } = props;

  return (
    <div className="total">
      <div>Total Tasks: {tasks.length}</div>
      <div>
        Tasks Completed: {tasks.filter((task: any) => task.completed).length}
      </div>
    </div>
  );
};

export default Total;
