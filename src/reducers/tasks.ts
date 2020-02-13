// initial state
const INITIAL_STATE = [
  { id: 1, text: "Water the plants", completed: false, priority: 2 },
  { id: 2, text: "Go shopping", completed: false, priority: 3 },
  { id: 3, text: "Walk the dog", completed: false, priority: 1 }
];
// tasks reducer
export const tasks = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      return state.map((task: any) => {
        if (action.id === task.id) {
          task.completed = !task.completed;
        }
        return task;
      });
    case "SET_PRIORITY":
      return state.map((task: any) => {
        if (action.id === task.id) {
          task.priority = action.priority;
        }
        return task;
      });
    case "ADD_TASK":
      let newID = 0;
      state.forEach(task => {
        if (newID <= task.id) {
          newID = task.id + 1;
        }
      });
      const newItem = {
        id: newID,
        completed: false,
        text: action.task.text,
        priority: action.task.priority
      };
      return [...state, newItem];
    default:
      return state;
  }
};
