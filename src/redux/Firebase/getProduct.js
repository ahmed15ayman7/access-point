import axios from "axios";
import { getAllProductOnDatabase } from "../types/getType";

export let GetAllProducts = () => {
  return async (dispatch) => {
    let result = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: getAllProductOnDatabase, products: result.data });
  };
};
