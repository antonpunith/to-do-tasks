import React from "react";
import { connect } from "react-redux";
import { toggleCompletion } from "../../actions";

const TaskList = (props: any) => {
  const { tasks, dispatch, sort } = props;
  let sortedTasks = tasks;
  if (sort.sortBy === "name") {
    sortedTasks = tasks.sort((taska: any, taskb: any) => {
      if (taska.text < taskb.text) {
        return -1;
      }
      if (taska.text > taskb.text) {
        return 1;
      }
      return 0;
    });
  }
  if (sort.sortBy === "priority") {
    sortedTasks = tasks.sort((taska: any, taskb: any) => {
      return taska.priority - taskb.priority;
    });
  }

  return (
    <>
      {sortedTasks.map((task: any, index: number) => (
        <li
          key={index}
          onClick={() => {
            dispatch(toggleCompletion(task.id));
          }}
        >
          {task.text} {task.completed ? "completed" : "to-do"}
        </li>
      ))}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(TaskList);
