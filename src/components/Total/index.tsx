import React from "react";
import { connect } from "react-redux";
// styles
import "./styles.css";

const Total = (props: any) => {
  const { tasks } = props;

  return (
    <div className="total">
      <div>Total Tasks: {tasks.length}</div>
      <div>
        Tasks Completed: {tasks.filter((task: any) => task.completed).length}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(Total);
