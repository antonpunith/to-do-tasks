import React from "react";
// styles
import "./styles.css";

const TaskList = (props: any) => {
  // reducers and actions available from props
  const { tasks, sort, toggleCompletion, setPriority, deleteTask } = props;
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
