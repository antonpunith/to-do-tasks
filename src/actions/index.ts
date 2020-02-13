const toggleCompletion = (taskId: number) => {
  return {
    type: "TOGGLE_COMPLETE",
    taskId
  };
};

const addTask = (task: any) => {
  return {
    type: "ADD_TASK",
    task
  };
};

const deleteTask = (taskId: number) => {
  return {
    type: "DELETE_TASK",
    taskId
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

export { toggleCompletion, sortTask, setPriority, addTask, deleteTask };
