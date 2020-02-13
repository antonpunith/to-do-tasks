import React from "react";
import { connect } from "react-redux";
import { sortTask } from "../../actions";

const SortOrder = (props: any) => {
  const { dispatch } = props;
  return (
    <>
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
    </>
  );
};

export default connect()(SortOrder);
