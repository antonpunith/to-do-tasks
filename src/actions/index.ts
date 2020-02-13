const toggleCompletion = (taskId: number) => {
  return {
    type: "TOGGLE_COMPLETE",
    id: taskId
  };
};

export { toggleCompletion };
