import React from "react";
import { connect } from "react-redux";
//actions
import { toggleCompletion, setPriority } from "../../actions";
// styles
import "./styles.css";

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
    <ul className="tasks">
      {sortedTasks.map((task: any, index: number) => (
        <li className="task" key={index}>
          <div className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => {
                dispatch(toggleCompletion(task.id));
              }}
            ></input>
            {task.text}
          </div>
          <div>
            <label>
              Priority
              <input
                value={task.priority}
                type="number"
                onChange={e =>
                  dispatch(setPriority(task.id, parseInt(e.target.value)))
                }
              />
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(TaskList);
