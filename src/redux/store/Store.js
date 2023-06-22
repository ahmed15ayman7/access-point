import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { RootReducer } from "../reducer/root/ReducerMain";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
