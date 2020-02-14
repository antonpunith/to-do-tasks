import React from "react";
// utils
import { sortTaskByText, sortTaskbyPriority } from "../../utils";
// styles
import "./styles.css";

const TaskList = (props: any) => {
  const { tasks, sort, toggleCompletion, setPriority, deleteTask } = props;
  let sortedTasks = tasks;
  if (sort.sortBy === "name") {
    sortedTasks = tasks.sort(sortTaskByText);
  }
  if (sort.sortBy === "priority") {
    sortedTasks = tasks.sort(sortTaskbyPriority);
  }

  return (
    <ul className="tasks">
      {sortedTasks.map((task: any, index: number) => (
        <li className="task" key={index}>
          <div className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                toggleCompletion(task.id);
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
                onChange={e => setPriority(task.id, parseInt(e.target.value))}
              />
            </label>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
