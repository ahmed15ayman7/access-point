// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { urlImage } from "../types/registerType";

//?users
const firebaseConfigUsers = {
  apiKey: "AIzaSyCA3-bBr36Cvy_rr2dAZT2jx5udAznJe3g",
  authDomain: "access-point-users.firebaseapp.com",
  projectId: "access-point-users",
  storageBucket: "access-point-users.appspot.com",
  messagingSenderId: "515333558649",
  appId: "1:515333558649:web:b53fa03740278f78e91fa8",
  measurementId: "G-H5KDF9JPTE",
};

//? Initialize Firebase
const appUsers = initializeApp(firebaseConfigUsers, "Users");

export const auth = getAuth(appUsers);
export const firebaseAnalytics = getAnalytics(appUsers);

export function logout() {
  return signOut(auth);
}

//? Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export const dbUser = getFirestore(appUsers);
//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//?images uploade
const firebaseConfigImages = {
  apiKey: "AIzaSyCoM2vbxmLAPW5mBd7_YMaTUyiuJ1LMz_8",
  authDomain: "access-point-images.firebaseapp.com",
  projectId: "access-point-images",
  storageBucket: "access-point-images.appspot.com",
  messagingSenderId: "258311019278",
  appId: "1:258311019278:web:fc64b02501017dfb0e155f",
  measurementId: "G-SH0CE5EBEC",
};

// Initialize Firebase
const appImages = initializeApp(firebaseConfigImages, "Images");
const storage = getStorage(appImages);

//? Storage
export async function upload(file, setLoading, dispatch) {
  setLoading(true);
  const fileRef = ref(storage, "/imagesUser/" + new Date().getTime() + ".png");
  await uploadBytesResumable(fileRef, file).catch((e) => console.log(e));
  const photoURL = await getDownloadURL(fileRef).catch((e) =>
    console.log(e, "url")
  );
  dispatch({ type: urlImage, pyload: photoURL });
  setLoading(false);
}
//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//?database products
//?Firestore database
const firebaseConfigDBProducts = {
  apiKey: "AIzaSyCqQozii4uC2ihxiADY7mUgRGj6_xiIH8M",
  authDomain: "access-point-db-products.firebaseapp.com",
  projectId: "access-point-db-products",
  storageBucket: "access-point-db-products.appspot.com",
  messagingSenderId: "359270585376",
  appId: "1:359270585376:web:7e8537c1a6d1d8608c5845",
  measurementId: "G-H7NXDDFJ2X",
};

// Initialize Firebase
const appDBProducts = initializeApp(firebaseConfigDBProducts, "Products");
export const db = getFirestore(appDBProducts);

//? database shopping ->orders and messages
const firebaseConfigDBShopping = {
  apiKey: "AIzaSyCvbk9g6_snPupfyvVgITSPTRr57KK74f0",
  authDomain: "access-point-db-shopping.firebaseapp.com",
  projectId: "access-point-db-shopping",
  storageBucket: "access-point-db-shopping.appspot.com",
  messagingSenderId: "673340032814",
  appId: "1:673340032814:web:4fe8294c33fa03e6939cbf",
  measurementId: "G-WNBTFTGDCK",
};
// Initialize Firebase
const appDBShopping = initializeApp(firebaseConfigDBShopping, "Shopping");
export const dbShopping = getFirestore(appDBShopping);
//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//?admin
const firebaseConfigAdmin = {
  apiKey: "AIzaSyALGbDQZeNAoKNaFJEElgcQ-wddZZdoF5Q",
  authDomain: "access-point-admin.firebaseapp.com",
  projectId: "access-point-admin",
  storageBucket: "access-point-admin.appspot.com",
  messagingSenderId: "219877110813",
  appId: "1:219877110813:web:96eddc2656172a8a2082f4",
  measurementId: "G-NDD2YYLKN6",
};

// Initialize Firebase
const appAdmin = initializeApp(firebaseConfigAdmin);
export const AdminAuth = getAuth(appAdmin);
export function logoutAdmin() {
  return signOut(AdminAuth);
}
