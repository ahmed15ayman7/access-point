import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { Lodding } from "../../components/const-componant/Lodding/Lodding";


export const CheckoutPage = () => {
  let data = useSelector((e) => e.reducerCartQuantity.productsCart);
  let Alldata = useSelector((e) => e.getDate.products);
  let names = Alldata.map((e, i) =>
    data.map((a) => (e.id === a.id ? e.title : ""))
  )
    .join(",")
    .split(",")
    .filter((e) => e !== "")
    .map((e, i) => i + 1 + ": " + e)
    .join(", ")
    .slice(0, 50);
 
  return (
    <>
      {Alldata.length === 0 ? (
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container
          className="p-lg-4 pt-lg-1 text-white"
          style={{ overflow: "hidden" }}>
          <Row className="pt-5">
            <Col className="m-2 pt-2">
              <h1>Checkout Page</h1>
              <h5>
                Products: {data.length} {"->"} {names}.....
              </h5>
            </Col>
          </Row>
          <Row className="p-lg-4 m-lg-5 mt-lg-1 m-2 mb-lg-1 pb-lg-1 pt-lg-1">
            <Col className="p-lg-5 m-lg-5 mt-lg-1 m-2 mb-lg-1 pb-lg-1">
              <CheckoutForm />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
