import { actions } from "../actions/actions";

let m = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const reducerDelete = (state = m, action) => {
  switch (action.type) {
    case actions.deleteAll.name:
      return [];
    case actions.deleteItem.name:
      return state.slice(0, state.length - 1);

    default:
      return state;
  }
};
