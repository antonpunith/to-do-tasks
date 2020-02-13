import React, { useState } from "react";
import { connect } from "react-redux";
//actions
import { addTask } from "../../actions";
// styles
import "./styles.css";

const AddTask = (props: any) => {
  const { dispatch } = props;
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(0);
  return (
    <>
      <form
        className="add-task"
        onSubmit={e => {
          e.preventDefault();
          if (text.trim()) {
            dispatch(addTask({ text, priority }));
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

export default connect()(AddTask);
