import { addProductCart, quantitys } from "../../types/addType";
import { deleteAllCart, deleteProductCart } from "../../types/deleteType";
let initial = { productsCart: [] };

export const reducerCart = (state = initial, action) => {
  switch (action.type) {
    case addProductCart:
      state.productsCart.push({ id: action.id, quantity: action.quantity });
      localStorage.setItem("productsCart", JSON.stringify(state.productsCart));
      return { productsCart: state.productsCart };
    case deleteProductCart:
      let pro =
        action.proCh === undefined
          ? state.productsCart.filter((e) => e.id !== action.id)
          : action.proCh.filter((e) => e.id !== action.id);
      localStorage.setItem("productsCart", JSON.stringify(pro));
      return { productsCart: pro };
    case deleteAllCart:
      localStorage.setItem("productsCart", JSON.stringify([]));
      return { productsCart: [] };
    default:
      let storage = localStorage.getItem("productsCart")
        ? JSON.parse(localStorage.getItem("productsCart"))
        : undefined;
      return { productsCart: storage === undefined ? [] : storage };
  }
};
let initialdata = { productsCart: [] };
export const reducerCartQuantity = (state = initialdata, action) => {
  switch (action.type) {
    case quantitys:
      let pro =
        action.proCh === undefined
          ? action.pro.map((e) =>
              e.id === action.id
                ? { id: action.id, quantity: action.quantity }
                : e
            )
          : action.proCh.map((e) =>
              e.id === action.id
                ? { id: action.id, quantity: action.quantity }
                : e
            );
      localStorage.setItem("productsCart", JSON.stringify(pro));
      return { productsCart: pro };
    case deleteProductCart:
      let prod =
        action.proCh === undefined
          ? null
          : action.proCh.filter((e) => e.id !== action.id);
      localStorage.setItem("productsCart", JSON.stringify(prod));
      return { productsCart: prod };
    default:
      let storage = localStorage.getItem("productsCart")
        ? JSON.parse(localStorage.getItem("productsCart"))
        : undefined;
      return { productsCart: storage === undefined ? undefined : storage };
  }
};
