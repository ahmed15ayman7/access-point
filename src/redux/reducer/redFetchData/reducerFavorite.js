import { addProductFavorite } from "../../types/addType";
import {
  deleteAllFavorite,
  deleteProductFavorite,
} from "../../types/deleteType";

let initialState = { productsFavorite: [] };
export const reducerFavorite = (state = initialState, action) => {
  switch (action.type) {
    case addProductFavorite:
      state.productsFavorite.push({ id: action.id });
      localStorage.setItem(
        "productsFavorite",
        JSON.stringify(state.productsFavorite)
      );
      return { productsFavorite: state.productsFavorite };
    case deleteProductFavorite:
      let pro = state.productsFavorite.filter((e) => e.id !== action.id);
      localStorage.setItem("productsFavorite", JSON.stringify(pro));
      return { productsFavorite: pro };
    case deleteAllFavorite:
      return { productsFavorite: [] };
    default:
      let storage = localStorage.getItem("productsFavorite")
        ? JSON.parse(localStorage.getItem("productsFavorite"))
        : undefined;
      return { productsFavorite: storage === undefined ? [] : storage };
  }
};
