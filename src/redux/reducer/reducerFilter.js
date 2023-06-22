import { Filter, FilterPrice, FilterSearch } from "../types/filterType";
import { getAllProductOnDatabase } from "../types/getType";

let data = { products: [] };
export const reducerFilterClasess = (state = data, action) => {
  switch (action.type) {
    case getAllProductOnDatabase:
      let isOnDef = new Set(action.products.map((e) => e.category));
      return {
        products: action.products,
        isOn: [...isOnDef].map((e) => false),
      };
    case Filter:
      let classesProduct = new Set(action.products.map((e) => e.category));

      return {
        products:
          action.name === ""
            ? action.products
            : action.products.filter((e) => e.category === action.name),
        isOn: [...classesProduct].map((e) =>
          e === action.name ? true : false
        ),
      };
    case FilterPrice:
      let isOnDefP = new Set(action.names.map((e) => e.category));
      return {
        products:
          action.name === "from"
            ? action.products.filter((e) => e.price >= +action.value)
            : action.products.filter((e) => e.price <= +action.value),
        isOn: [...isOnDefP].map((e) => (e === action.name ? true : false)),
      };
    case FilterSearch:
      let classesProducts = new Set(action.products.map((e) => e.category));
      return {
        products: action.products.filter(
          (e) =>
            e.title.toLowerCase().includes(action.name) ||
            e.description.toLowerCase().includes(action.name) ||
            e.title.includes(action.name) ||
            e.description.includes(action.name)
        ),
        isOn: [...classesProducts].map((e) => false),
      };
    default:
      return state;
  }
};
