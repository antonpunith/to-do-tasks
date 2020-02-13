import React from "react";
import { connect } from "react-redux";
// actions
import { sortTask } from "../../actions";
// styles
import "./styles.css";

const SortOrder = (props: any) => {
  const { dispatch } = props;
  return (
    <div className="sort-bar">
      <button
        onClick={() => {
          dispatch(sortTask("name"));
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          dispatch(sortTask("priority"));
        }}
      >
        Sort by Priority
      </button>
    </div>
  );
};

export default connect()(SortOrder);
