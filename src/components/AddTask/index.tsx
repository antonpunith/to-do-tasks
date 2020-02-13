import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions";

const AddTask = (props: any) => {
  const { dispatch } = props;
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(0);
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addTask({ text, priority }));
          setText("");
          setPriority(0);
        }}
      >
        <input
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <input
          value={priority}
          type="number"
          onChange={e => {
            setPriority(parseInt(e.target.value));
          }}
        />
        <button type="submit">submit</button>
      </form>
      <div
        onClick={() => {
          dispatch(addTask({ text: "some text" }));
        }}
      >
        Test
      </div>
    </>
  );
};

export default connect()(AddTask);
