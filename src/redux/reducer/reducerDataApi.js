import { getAllProductOnDatabase } from "../types/getType";

let data = { products: [] };
export const reducerDataApi = (state = data, action) => {
  switch (action.type) {
    case getAllProductOnDatabase:
      return { products: action.products };

    default:
      return state;
  }
};
