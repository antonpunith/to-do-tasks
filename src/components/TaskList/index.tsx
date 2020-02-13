import React from "react";
import { connect } from "react-redux";
import { toggleCompletion, setPriority } from "../../actions";

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
        <li key={index}>
          {task.text}{" "}
          <span
            onClick={() => {
              dispatch(toggleCompletion(task.id));
            }}
          >
            {task.completed ? "completed" : "to-do"}{" "}
          </span>
          <input
            value={task.priority}
            type="number"
            onChange={e =>
              dispatch(setPriority(task.id, parseInt(e.target.value)))
            }
          />
        </li>
      ))}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(TaskList);
