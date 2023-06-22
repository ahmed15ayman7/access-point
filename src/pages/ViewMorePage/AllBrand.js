import React from "react";
import { Container, Row } from "react-bootstrap";
import { Images } from "../../assets/images/images";
import { CardBrand } from "../../components/const-componant/cards/Brands/CardBrand";

import PagenationPages from "../../components/const-componant/pagination/PagenationPages";

export const AllBrand = () => {
  return (
    <Container>
      <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
        {Images.map((e, i) => (
          <CardBrand key={i} img={e} />
        ))}
      </Row>
      <Row className="pt-5" style={{ justifyContent: "space-evenly" }}>
        <PagenationPages Pagination={Images.length / 24} />
      </Row>
    </Container>
  );
};
