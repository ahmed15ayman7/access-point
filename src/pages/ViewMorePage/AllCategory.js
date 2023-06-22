import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardCategory } from "../../components/const-componant/cards/category/CardCategory";
import { Lodding } from "../../components/const-componant/Lodding/Lodding";
import PagenationPages from "../../components/const-componant/pagination/PagenationPages";

export const AllCategory = () => {
  let products = useSelector((e) => e.getDate.products);
  let category = new Set(products.map((e) => e.category));
  const [numPro, setNumPro] = useState(0);
  let pages = [...category].length / 20;
  let handlePageClick = (e) => {
    setNumPro(e.selected * 20);
  };
  return (
    <>
      {products.length === 0 ? (
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row
            className="pt-5 text-white"
            style={{ justifyContent: "space-evenly" }}>
            <h1>All Category</h1>
          </Row>
          <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
            {[...category].slice(numPro, numPro + 20).map((e, i) => {
              let product = products[i * 6];
              return (
                <CardCategory key={i} category={e} products={product.image} />
              );
            })}
          </Row>
          {category.size >= 20 ? (
            <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
              <PagenationPages
                Pagination={pages}
                handlePageClick={handlePageClick}
              />
            </Row>
          ) : null}
        </Container>
      )}
    </>
  );
};
