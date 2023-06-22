
import { Card } from "react-bootstrap";
import "../../components/const-componant/cards/CardsStyle.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import {
  WaterPlay,
} from "../../assets/audios/SoundPlay";


function CardProductAdmin(props) {
  const first = useRef();
  
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
            
           {props.children}
          </Card.Title>

          <Card.Text className="name-product" style={{overflow:'scroll'}}>
            <Link
              to={`/dashboard/update-product/${props.id}`}
              onClick={() => {
                WaterPlay();
              }}
              style={{ textDecoration: "none", color: "#000000"}}>
              {props.title}
            </Link>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <p className="w-25 fs-6 fw-bold price">{Math.ceil(props.price)}$</p>
            <p className="w-25" style={{ color: "#1286a3" }}>
              {props.rate}
              <i className="fa-solid fa-star" style={{ color: "#1286a3" }}></i>{" "}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p>Quantity:{props.qty}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProductAdmin;
