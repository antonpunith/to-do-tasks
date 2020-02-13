// initial state
const INITIAL_STATE = [
  { id: 1, text: "task2", completed: false, priority: 3 },
  { id: 2, text: "task1", completed: false, priority: 2 },
  { id: 3, text: "task100", completed: false, priority: 1 }
];
// tasks reducer
export const tasks = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      return state.map((task: any, index: number) => {
        if (action.id === task.id) {
          task.completed = !task.completed;
        }
        return task;
      });
    default:
      return state;
  }
};
