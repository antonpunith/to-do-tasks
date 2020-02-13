const toggleCompletion = (taskId: number) => {
  return {
    type: "TOGGLE_COMPLETE",
    id: taskId
  };
};

const sortTask = (field: string) => {
  return {
    type: "SORT_TASK",
    field
  };
};

export { toggleCompletion, sortTask };
