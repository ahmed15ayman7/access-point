import { useSelector } from "react-redux";

export const LocalStoregeSetCart = () => {
  let dataCart = useSelector((e) => e.reducerCart.productsCart);
  localStorage.setItem("dataCart", dataCart);
};
export const LocalStoregeSetFavorite = () => {
  let dataFavorite = useSelector((e) => e.reducerFavorite.productsFavorite);
  localStorage.setItem("dataFavorite", dataFavorite);
};
export const LocalStoregeGetCart = () => {
  return localStorage.setItem("dataCart");
};
export const LocalStoregeGetFavorite = () => {
  return localStorage.getItem("dataFavorite");
};
