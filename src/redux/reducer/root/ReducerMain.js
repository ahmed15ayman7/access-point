import { combineReducers } from "redux";
import { anyAction } from "../redFetchData/reducerAnyAction";
import { reducerCart, reducerCartQuantity } from "../redFetchData/reducerCart";
import { reducerFavorite } from "../redFetchData/reducerFavorite";
import { reducerAddCart } from "../reducerAddCart";
import { reducerDataApi } from "../reducerDataApi";
import { reducerDelete } from "../reducerDelete";
import { reducerFilterClasess } from "../reducerFilter";
import { reducerMessages, reducerOrders } from "../reducerOrder";
import {
  reducerAdmin,
  reducerAuth,
  reducerUserDetails,
  reducerUserImage,
  reducerUsers,
} from "../reducerRegister/reducerAuth";

export const RootReducer = combineReducers({
  addCart: reducerAddCart,
  delete: reducerDelete,
  getDate: reducerDataApi,
  filter: reducerFilterClasess,
  reducerCart: reducerCart,
  reducerFavorite: reducerFavorite,
  reducerCartQuantity: reducerCartQuantity,
  reducerAuth: reducerAuth,
  userImage: reducerUserImage,
  userDetails: reducerUserDetails,
  users: reducerUsers,
  count: anyAction,
  admin: reducerAdmin,
  orders: reducerOrders,
  messages: reducerMessages,
});
