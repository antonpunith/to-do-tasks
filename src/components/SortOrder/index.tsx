import React, { FC } from "react";
// styles
import "./styles.css";

const SortOrder: FC<{ sortTask: (name: string) => void }> = props => {
  const { sortTask } = props;
  return (
    <div className="sort-bar">
      <button onClick={() => sortTask("name")}>Sort by Name</button>
      <button onClick={() => sortTask("priority")}>Sort by Priority</button>
    </div>
  );
};

export default SortOrder;
