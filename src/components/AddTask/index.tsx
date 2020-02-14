import React, { useState } from "react";

// styles
import "./styles.css";

const AddTask = (props: any) => {
  const { addTask } = props;
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(0);
  return (
    <>
      <form
        className="add-task"
        onSubmit={e => {
          e.preventDefault();
          if (text.trim()) {
            addTask({ text, priority });
            setText("");
            setPriority(0);
          }
        }}
      >
        <label>
          TODO
          <input
            className="input-todo"
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Priority
          <input
            className="input-priority"
            value={priority}
            type="number"
            onChange={e => {
              setPriority(parseInt(e.target.value));
            }}
          />
        </label>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTask;
