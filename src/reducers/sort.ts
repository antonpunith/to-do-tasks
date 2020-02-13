export const sort = (state = { sortBy: null }, action: any) => {
  switch (action.type) {
    case "SORT_TASK":
      return Object.assign({}, state, { sortBy: action.field });
    default:
      return state;
  }
};
