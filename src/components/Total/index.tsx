import React from "react";
import { connect } from "react-redux";

const Total = (props: any) => {
  const { tasks } = props;

  return (
    <>
      <div>Total Tasks: {tasks.length}</div>
      <div>
        Tasks Completed: {tasks.filter((task: any) => task.completed).length}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(Total);
