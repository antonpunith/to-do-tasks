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

const setPriority = (id: number, priority: number) => {
  console.log(id, priority);
  return {
    type: "SET_PRIORITY",
    id,
    priority
  };
};

export { toggleCompletion, sortTask, setPriority };
