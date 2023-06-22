import { getProductOnDatabase } from "../types/getType";

let data = { products: [] };
export const reducerProduct = (state = data, action) => {
  switch (action.type) {
    case getProductOnDatabase:
      return { products: action.products };

    default:
      return state;
  }
};
