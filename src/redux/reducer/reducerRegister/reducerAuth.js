import { getAllDataUser, getAllUsers } from "../../types/getType";
import {
  LoginAdminType,
  LoginType,
  SignOutAdminType,
  SignOutType,
  SignUpType,
  urlImage,
} from "../../types/registerType";

let userdata = localStorage.getItem("profile");

let user = userdata !== "" ? JSON.parse(userdata) : null;
let initialValues = { profile: user };
export const reducerAuth = (state = initialValues, action) => {
  switch (action.type) {
    case LoginType:
      localStorage.setItem("profile", JSON.stringify(action.pyload));
      return { profile: action.pyload };
    case SignUpType:
      localStorage.setItem("profile", JSON.stringify(action.pyload));
      return { profile: action.pyload };
    case SignOutType:
      localStorage.setItem("profile", null);
      return { profile: null };
    default:
      return state;
  }
};
let admindata = localStorage.getItem("profile-admin");

let admin = userdata !== "" ? JSON.parse(admindata) : null;
let initialValuesAdmin = { profile: admin };
export const reducerAdmin = (state = initialValuesAdmin, action) => {
  switch (action.type) {
    case LoginAdminType:
      localStorage.setItem("profile-admin", JSON.stringify(action.pyload));
      return { profile: action.pyload };
    case SignOutAdminType:
      localStorage.setItem("profile-admin", null);
      return { profile: null };
    default:
      return state;
  }
};
let userImage = localStorage.getItem("userImage");
export const reducerUserImage = (state = userImage, action) => {
  switch (action.type) {
    case urlImage:
      localStorage.setItem("userImage", action.pyload);
      return action.pyload;
    default:
      return state;
  }
};
let data = localStorage.getItem("userDetails");
export let initializeDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  image: "",
  country: "",
  address: "",
  address2: "",
  city: "",
  zip: "",
  state: "",
};
let userDetails =
  data !== ""
    ? { details: JSON.parse(data) }
    : { details: [initializeDetails] };
export const reducerUserDetails = (state = userDetails, action) => {
  switch (action.type) {
    case getAllDataUser:
      let checkRespose =
        action.pyload.length === 0 ? [initializeDetails] : action.pyload;
      localStorage.setItem("userDetails", JSON.stringify(checkRespose));
      return { details: checkRespose };
    default:
      return state;
  }
};
let users = { users: [] };
export const reducerUsers = (state = users, action) => {
  switch (action.type) {
    case getAllUsers:
      let checkRespose = action.pyload.length === 0 ? [user] : action.pyload;
      return { users: checkRespose };
    default:
      return state;
  }
};
