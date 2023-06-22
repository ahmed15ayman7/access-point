import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WaterPlay } from "../../assets/audios/SoundPlay";

import CardProduct from "../../components/const-componant/cards/product/CardProduct";
import { Lodding } from "../../components/const-componant/Lodding/Lodding";
import PagenationPages from "../../components/const-componant/pagination/PagenationPages";
import { deleteProductFavorite } from "../../redux/types/deleteType";

export const FavoritePage = () => {
  let data = useSelector((e) => e.reducerFavorite.productsFavorite);
  let AllData = useSelector((state) => state.getDate.products);
  const [numPro, setNumPro] = useState(0);
  let pages = data.length / 20;
  let handlePageClick = (e) => {
    setNumPro(e.selected * 20);
  };
  return (
    <>
      {AllData.length === 0 ? (
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>
      ) : data.length !== 0 ? (
        <Container>
          <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
            {AllData.map((e) =>
              data
                .slice(numPro, numPro + 20)
                .map((a, i) =>
                  e.id === a.id ? (
                    <CardProduct
                      key={i}
                      children={"favorite"}
                      col_lg={3}
                      col_md={4}
                      col_sm={6}
                      col={12}
                      img={e.image}
                      price={e.price}
                      rate={e.rating.rate}
                      id={e.id}
                      title={e.title}
                      type={deleteProductFavorite}
                    />
                  ) : null
                )
            )}
          </Row>

          <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
            <PagenationPages
              Pagination={pages}
              handlePageClick={handlePageClick}
            />
          </Row>
        </Container>
      ) : (
        <Container>
          <Row
            className="mt-5 pt-5 mb-5 text-white "
            style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <h1>Your favorite empty!</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant=""
                className="btn-more-2"
                onClick={() => WaterPlay()}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  Go to Access Point
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
