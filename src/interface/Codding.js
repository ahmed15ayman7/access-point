import React, { useEffect } from "react";
import { dbShopping, dbUser, 
  db 
} from "../redux/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  getAllDataUser,
  getAllProductOnDatabase,
  getAllUsers,getAllOrders, getAllMessages
} from "../redux/types/getType";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const Codding = () => {
  let admin=useSelector(e=>e.admin.profile)
  let dipatch = useDispatch();
  let user = useSelector((e) => e.reducerAuth.profile);

  useEffect(() => {
    user === null ? localStorage.setItem("userImage", "") : console.log();
    let GetAllProducts = async () => {
      let result = await axios.get("https://fakestoreapi.com/products");
      let list1 = [];
      result.data.forEach((e) => {
        let {
          id,
          title,
          price,
          description,
          category,
          image,
          rating: { rate, count },
        } = e;
        let catSlice = category.includes("-")
          ? category.split("-")[0]
          : category.split(" ")[0];
        list1.push({
          id: id,
          title: title,
          price: price,
          description: description,
          category: catSlice.toLowerCase(),
          image: image,
          rating: {
            rate: rate,
            count: count,
          },
          api:{url:"https://fakestoreapi.com/products",name:'fakestoreapi',uid:id}
        });
      });

      let list2 = [];
      const response = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      response.data.data.forEach((e, i) => {
        let {
          _id,
          images,
          category,
          ratingsQuantity,
          title,
          description,
          price,
          ratingsAverage,
        } = e;
        let catSlice = category.name.includes("-")
          ? category.name.split("-")[0]
          : category.name.split(" ")[0];
        list2.push({
          id: i + 21,
          title: title,
          price: price,
          description: description,
          category: catSlice.toLowerCase(),
          image: images[0],
          rating: {
            rate: ratingsAverage,
            count: ratingsQuantity,
          },
          api:{url:"https://route-ecommerce.onrender.com/api/v1/products",name:'route-ecommerce',uid:_id}
        });
      });

      let list3 = [];
      const response2 = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      response2.data.products.forEach((e, i) => {
        let { id, title, price, description, images, rating, stock, category } = e;

        let catSlice = category.includes("-")
          ? category.split("-")[0]
          : category.split(" ")[0];
        list3.push({
          id: i + 61,
          title: title,
          price: price,
          description: description,
          category: catSlice.toLowerCase(),
          image: images[0],
          rating: {
            rate: rating,
            count: stock,
          },
          api:{url:"https://dummyjson.com/products?limit=100",name:'dummyjson',uid:id}

        });
      });
      let list = [];
      const querySnapshot = await getDocs(collection(db, "productMessages"));
      querySnapshot.forEach((doc) =>{
       list.push({ id: doc.id, ...doc.data() })
      });
    let productsM=list.map((a) =>
      [...list1, ...list2, ...list3].map((e) => {
          if(a.id === e.id){
            return({ ...e, messages: a.messages })
          }else if(a.id !== e.id){
            return({ ...e, messages: [] })
          }
          return 0;
        })
        )
        let [a,b]=productsM;
        let products= a.map((e,i)=>e.messages.length!==0?e:b[i])
      dipatch({ type: getAllProductOnDatabase, products: products });
    };
    GetAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getDetails = async () => {
      let list = [];
      let listUsers = [];
      const querySnapshot = await getDocs(collection(dbUser, "userDetails"));
      querySnapshot.forEach((doc) =>{
        if (user !== null) {
        if(user.uid === doc.id){
             list.push({ id: doc.id, ...doc.data() });
            };
              listUsers.push({ id: doc.id, ...doc.data() });
          }else{
             listUsers.push({ id: doc.id, ...doc.data() });
            }
      });
        dipatch({ type: getAllDataUser, pyload: list });
        dipatch({ type: getAllUsers, pyload: listUsers });
      }
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  let a = [];
  setInterval(() => {
    a.push(1, 2, 3, 4, 5, 6);
    if (a.length > 18) {
      a = [];
    }
    sessionStorage.setItem("count6", a.length);
  }, 10000);
  useEffect(() => {
    if (admin!==null) {
  const getDetails = async () => {
      let list = [];
      const querySnapshot = await getDocs(collection(dbShopping, "orders"));
      querySnapshot.forEach((doc) =>
          list.push({ id: doc.id, ...doc.data() }))          
      dipatch({ type: getAllOrders, pyload: list });
      let listMess = [];
      const querySnapshot2 = await getDocs(collection(dbShopping, "ContactUs"));
      querySnapshot2.forEach((doc) =>
      listMess.push({ id: doc.id, ...doc.data() }))          
      dipatch({ type: getAllMessages, pyload: listMess });
    };
    getDetails();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [admin]);
  
  return <></>;
};
