import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TotalPrice } from "../../components/cart/TotalPrice";
import CardProduct from "../../components/const-componant/cards/product/CardProduct";
import { Lodding } from "../../components/const-componant/Lodding/Lodding";
import PagenationPages from "../../components/const-componant/pagination/PagenationPages";
import { deleteProductCart } from "../../redux/types/deleteType";

export const CartPage = () => {
  let data = useSelector((state) => state.reducerCart.productsCart);
  let dataCh = useSelector((state) => state.reducerCartQuantity.productsCart);
  let dataMap = dataCh === undefined || dataCh === null ? data : dataCh;
  let allData = useSelector((state) => state.getDate.products);
  const totalPrice = [];
  const NumberOfPieces = [];
  allData.map((e, i) =>
    dataMap.map((a) =>
      e.id === a.id
        ? (totalPrice.push(Math.ceil(e.price) * a.quantity),
          NumberOfPieces.push(a.quantity))
        : null
    )
  );
  const [numPro, setNumPro] = useState(0);
  let pages = data.length / 20;
  let handlePageClick = (e) => {
    setNumPro(e.selected * 20);
  };
  return (
    <>
      {allData.length === 0 ? (
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
            <TotalPrice
              num_product={data.length}
              NumberOfPieces={NumberOfPieces}
              totalPrice={totalPrice}
            />
          </Row>
          <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
            {allData.map((e, i) =>
              data
                .slice(numPro, numPro + 20)
                .map((a) =>
                  e.id === a.id ? (
                    <CardProduct
                      key={i}
                      children={"cart"}
                      col_lg={3}
                      col_md={4}
                      col_sm={6}
                      col={12}
                      img={e.image}
                      price={e.price}
                      rate={e.rating.rate}
                      id={e.id}
                      title={e.title}
                      quantity={a.quantity}
                      type={deleteProductCart}
                    />
                  ) : null
                )
            )}
          </Row>

          <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
            <PagenationPages
              Pagination={Math.ceil(pages)}
              handlePageClick={handlePageClick}
            />
          </Row>
        </Container>
      )}
    </>
  );
};
