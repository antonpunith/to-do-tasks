const sortTaskByText = (taska: { text: string }, taskb: { text: string }) => {
  if (taska.text < taskb.text) {
    return -1;
  }
  if (taska.text > taskb.text) {
    return 1;
  }
  return 0;
};

const sortTaskbyPriority = (
  taska: { priority: number },
  taskb: { priority: number }
) => {
  return taska.priority - taskb.priority;
};

export { sortTaskByText, sortTaskbyPriority };
