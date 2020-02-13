import React from "react";
import { connect } from "react-redux";
import { toggleCompletion } from "../../actions";

const TaskList = (props: any) => {
  const { tasks, dispatch } = props;
  return (
    <>
      {tasks.map((task: any, index: number) => (
        <li
          key={index}
          onClick={() => {
            dispatch(toggleCompletion(index));
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
