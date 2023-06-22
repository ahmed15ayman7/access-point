import { updateProduct } from "../../types/update";

let anydata = localStorage.getItem("count");
let any = anydata !== 0 ? anydata : 0;
export const anyAction = (state = any, action) => {
  switch (action.type) {
    case updateProduct:
      localStorage.setItem("count", state + 1);
      return state + 1;
    default:
      return state;
  }
};
