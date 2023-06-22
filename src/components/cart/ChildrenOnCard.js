import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorPlay } from "../../assets/audios/SoundPlay";
import "./cartStyle.css";
import { quantitys } from "../../redux/types/addType";

export const ChildrenOnCard = ({ id, type, actionType, quantity }) => {
  let dispatch = useDispatch();
  let products = useSelector((e) => e.reducerCart.productsCart);
  let productsCh = useSelector((e) => e.reducerCartQuantity.productsCart);
  return (
    <>
      <div
        className="close"
        onClick={() => {
          dispatch({ type: actionType, id: id, proCh: productsCh });
          ErrorPlay();
        }}>
        <i className={`fa-solid fa-xmark fa-lg`} style={{ color: "#ffffff" }} />
      </div>
      {type === "favorite" ? null : (
        <form className="child-on-cart w-100">
          <label>quntity:</label>
          <input
            type="number"
            defaultValue={quantity ? quantity : 1}
            min={1}
            max={1000}
            className="ms-2 ps-2"
            onChange={(e) =>
              dispatch({
                type: quantitys,
                quantity: +e.target.value,
                id: id,
                pro: products,
                proCh: productsCh,
              })
            }
          />
        </form>
      )}
    </>
  );
};
