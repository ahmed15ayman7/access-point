import { getAllOrders,getAllMessages } from "../types/getType";


let init = [];
export const reducerOrders = (state = init, action) => {
  switch (action.type) {
    case getAllOrders:
      return action.pyload;
    default:
      return state;
  }
};
export const reducerMessages = (state = init, action) => {
  switch (action.type) {
    case getAllMessages:
      return action.pyload;
    default:
      return state;
  }
};