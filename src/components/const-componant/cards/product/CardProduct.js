import { Card } from "react-bootstrap";
import "../CardsStyle.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { ChildrenOnCard } from "../../../cart/ChildrenOnCard";
import {
  DonePlay,
  LikePlay,
  WaterPlay,
} from "../../../../assets/audios/SoundPlay";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductCart,
  deleteProductFavorite,
} from "../../../../redux/types/deleteType";
import {
  addProductCart,
  addProductFavorite,
} from "../../../../redux/types/addType";

function CardProduct(props) {
  const first = useRef();
  let dipatch = useDispatch();
  let doneAddCart = useSelector((e) => e.reducerCart.productsCart);
  let doneAddFavorite = useSelector((e) => e.reducerFavorite.productsFavorite);
  let clasessFavorite = "fa-regular";
  if (doneAddFavorite.filter((e) => e.id === props.id)[0] !== undefined) {
    clasessFavorite = "fa-solid clicked";
  }
  let onClickFavorite = (e) => {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("clicked");
    if (doneAddCart.filter((e) => e.id === props.id)[0] === undefined) {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      e.target.classList.add("clicked");
    } else {
      e.target.classList.add("fa-regular");
      e.target.classList.remove("fa-solid");
      e.target.classList.remove("clicked");
    }
    LikePlay();
    doneAddFavorite.filter((e) => e.id === props.id)[0] === undefined
      ? dipatch({ type: addProductFavorite, id: props.id })
      : dipatch({ type: deleteProductFavorite, id: props.id });
  };
  let clasessCart = "fa-cart-plus";
  if (doneAddCart.filter((e) => e.id === props.id)[0] !== undefined) {
    clasessCart = "fa-cart-shopping clicked";
  }
  let onClickCart = (e) => {
    if (doneAddCart.filter((e) => e.id === props.id)[0] === undefined) {
      e.target.classList.remove("fa-cart-plus");
      e.target.classList.add("fa-cart-shopping");
      e.target.classList.add("clicked");
    } else {
      e.target.classList.add("fa-cart-plus");
      e.target.classList.remove("fa-cart-shopping");
      e.target.classList.remove("clicked");
    }

    DonePlay();
    doneAddCart.filter((e) => e.id === props.id)[0] === undefined
      ? dipatch({ type: addProductCart, id: props.id, quantity: 1 })
      : dipatch({ type: deleteProductCart, id: props.id });
  };

  return (
    <div
      className={`col-lg-${props.col_lg ? props.col_lg : 3} col-md-${
        props.col_md ? props.col_md : 4
      } col-sm-${props.col_sm ? props.col_sm : 6} col-${
        props.col ? props.col : 12
      } mt-3 mb-3`}
      ref={first}>
      <Card className="card-product">
        <Card.Img variant="top" className="img" src={props.img} />
        <Card.Body>
          <Card.Title style={{ textAlign: "start" }} className="heart-and-cart">
            {props.children === "favorite" ? null : (
              <i
                className={`${clasessFavorite} fa-heart`}
                style={{ color: "#1286a3" }}
                onClick={(e) => onClickFavorite(e)}></i>
            )}
            {props.children === "cart" ? null : (
              <i
                className={`fa-solid ${clasessCart}`}
                style={{ color: "#1286a3" }}
                onClick={(e) => onClickCart(e)}></i>
            )}
          </Card.Title>

          <Card.Text className="name-product" style={{ overflow: "auto" }}>
            <Link
              to={`/product-details/${props.id}`}
              onClick={() => {
                WaterPlay();
              }}
              style={{ textDecoration: "none", color: "#000000" }}>
              {props.title}
            </Link>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <p className="w-25 fs-6 fw-bold price">{Math.ceil(props.price)}$</p>
            <p className="w-25" style={{ color: "#1286a3" }}>
              {props.rate}{" "}
              <i className="fa-solid fa-star" style={{ color: "#1286a3" }}></i>{" "}
            </p>
          </div>
          {props.children === "cart" ? (
            <ChildrenOnCard
              id={props.id}
              actionType={props.type}
              quantity={props.quantity}
            />
          ) : props.children === "favorite" ? (
            <ChildrenOnCard
              id={props.id}
              type={"favorite"}
              actionType={props.type}
            />
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
