import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProduct from "../../components/const-componant/cards/product/CardProduct";
import FormFilteration from "../../components/const-componant/Forms/FormFilteration";
import { Lodding } from "../../components/const-componant/Lodding/Lodding";

import PagenationPages from "../../components/const-componant/pagination/PagenationPages";
import { Search } from "../../components/Home/search/Search";

export const ProductsPage = () => {
  let Allproducts = useSelector((state) => state.getDate.products);
  let products = useSelector((state) => state.filter.products);
  const [numPro, setNumPro] = useState(0);
  let pro =
    products.length >= 21 ? products.slice(numPro, numPro + 21) : products;
  let pages = products.length / 21;
  let handlePageClick = (e) => {
    setNumPro(e.selected * 21);
  };
  return (
    <>
      {Allproducts.length === 0 ? (
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Search />
          <Row style={{ justifyContent: "space-evenly" }}>
            <Col sm={12} md={12} lg={3} style={{ position: "relative" }}>
              <h3 style={{ color: "#ffffff" }}>Filter Products</h3>
              <FormFilteration setNumPro={setNumPro} />
            </Col>
            <Col sm={10} md={9} lg={9}>
              {pro.length === 0 ? (
                <h1 style={{ color: "#ffffff", margin: "20vh" }}>No results</h1>
              ) : (
                <Container>
                  <Row
                    className="mt-lg-2"
                    style={{
                      justifyContent: "space-evenly",
                      maxHeight: "80vh",
                      overflow: "auto",
                    }}>
                    {pro.map((e, i) => (
                      <CardProduct
                        key={i}
                        col_lg={4}
                        col_md={6}
                        col_sm={6}
                        col={12}
                        img={e.image}
                        price={e.price}
                        rate={e.rating.rate}
                        id={e.id}
                        title={e.title}
                      />
                    ))}
                  </Row>
                  <Row
                    className="pt-3"
                    style={{ justifyContent: "space-evenly" }}>
                    <Col sm={10} md={9} lg={9} xs={11}>
                      <PagenationPages
                        Pagination={pages}
                        handlePageClick={handlePageClick}
                      />
                    </Col>
                  </Row>
                </Container>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
