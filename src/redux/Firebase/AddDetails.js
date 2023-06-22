import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, dbShopping, dbUser } from "./Firebase";

export let AddDetails = async (
  id,
  firstName,
  lastName,
  email,
  phone,
  image,
  country,
  address,
  address2,
  city,
  zip,
  state
) => {
  await setDoc(doc(dbUser, "userDetails", id), {
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    phone: phone || "",
    image: image || "",
    country: country || "",
    address: address || "",
    address2: address2 || "",
    city: city || "",
    zip: zip || "",
    state: state || "",
    timeStamp: serverTimestamp(),
  });
};
export const OrderNow= async(
    user,data
  ) => {
    if (data.length!==0) {
      
      await setDoc(doc(dbShopping, "orders", user.id), {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        image: user.image || "",
        country: user.country || "",
        address: user.address || "",
        address2: user.address2 || "",
        city: user.city || "",
        zip: user.zip || "",
        state: user.state || "",
        products:data,
        timeStamp: serverTimestamp(),
      });
    }
}
export let AddProductMessageOnDoc = async (id, messages) => {
  await setDoc(doc(db, "productMessages", id.toString()), {
    id: id,
    messages: messages,
  });
};
export let SendMessageOnDoc = async (
  id,
  uid,
  email,
  phone,
  message,
  image,
  username
) => {
  await setDoc(doc(dbShopping, "ContactUs", id.toString()), {
    uid: uid,
    email: email,
    phone: phone,
    message: message,
    image: image,
    username: username,
    timeStamp: serverTimestamp(),
  });
};
