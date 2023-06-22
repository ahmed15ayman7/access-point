import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./cartStyle.css";
import { ErrorPlay, WaterPlay } from "../../assets/audios/SoundPlay";
import { deleteAllCart } from "../../redux/types/deleteType";

export const TotalPrice = ({ num_product, totalPrice, NumberOfPieces }) => {
  let total = 0;
  let NumberPieces = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    total += totalPrice[i];
  }
  for (let i = 0; i < NumberOfPieces.length; i++) {
    NumberPieces += NumberOfPieces[i];
  }
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="mb-4 text-white">
        Cart Page <i className="fa-solid fa-cart-shopping" />
      </h1>
      <Container className="text-white TotalPrice">
        <Row style={{ justifyContent: "center" }} className="p-2">
          <Col lg={3} md={4} sm={6} xs={11} className="mb-2">
            <h5>
              Number product:{" "}
              <span style={{ fontFamily: "sans-serif" }}>{num_product}</span>
            </h5>
          </Col>
          <Col lg={3} md={4} sm={6} xs={11} className="mb-2">
            <h5>
              Number of pieces:{" "}
              <span style={{ fontFamily: "sans-serif" }}>{NumberPieces}</span>
            </h5>
          </Col>
          <Col lg={3} md={4} sm={6} xs={11} className="mb-2">
            <h5>
              Total Price:{" "}
              <span style={{ fontFamily: "sans-serif" }}>{total}$</span>
            </h5>
          </Col>

          <Col lg={12}></Col>

          {num_product ? (
            <>
              <Col lg={3} md={4} sm={6} xs={11} className="mb-3">
                <Button
                  variant=""
                  className="btn-more"
                  onClick={() => WaterPlay()}>
                  <Link to={"/checkout"} style={{ textDecoration: "none" }}>
                    Checkout
                  </Link>
                </Button>
              </Col>
              <Col lg={3} md={4} sm={6} xs={11} className="mb-3">
                <Button
                  variant=""
                  className="btn-delete"
                  onClick={() => {
                    dispatch({ type: deleteAllCart });
                    ErrorPlay();
                  }}>
                  Delete All
                </Button>
              </Col>
            </>
          ) : (
            <Col lg={3} md={4} sm={6} xs={11} className="mb-3">
              <h1>Cart empty !</h1>
            </Col>
          )}

          <Col lg={12}></Col>
          <Col className="mb-2">
            <Button
              variant=""
              className="btn-more-2"
              onClick={() => WaterPlay()}>
              <Link to={"/products"} style={{ textDecoration: "none" }}>
                Continue shopping
              </Link>{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
