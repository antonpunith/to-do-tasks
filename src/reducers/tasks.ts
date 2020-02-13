// initial state
const INITIAL_STATE = [
  { text: "task1", completed: false },
  { text: "task2", completed: false }
];
// tasks reducer
export const tasks = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      return state.map((task: any, index: number) => {
        if (action.id === index) {
          task.completed = !task.completed;
        }
        return task;
      });
    default:
      return state;
  }
};
