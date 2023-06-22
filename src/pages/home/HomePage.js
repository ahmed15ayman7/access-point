import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "../../components/Home/search/Search";
import { HomeCategory } from "../../components/Home/homeCategory/HomeCategory";
import { Discount } from "../../components/const-componant/cards/Discount";
import { Brands } from "../../components/const-componant/cards/Brands/Brands";
import { Footer } from "../../components/const-componant/footer/Footer";
import { Lodding } from "../../components/const-componant/Lodding/Lodding";
import { useSelector } from "react-redux";
import { ImageUpload } from "../../components/profile/ImageUpload";
import { initializeDetails } from "../../redux/reducer/reducerRegister/reducerAuth";
import SliderHome from "../../components/sliders/SliderHome";

export const HomePage = () => {
  let data = useSelector((e) => e.getDate.products);
  let user = useSelector((e) => e.reducerAuth.profile);
  let userDetails = useSelector((e) => e.userDetails.details);

  return (
    <>
      {data.length === 0 || userDetails === initializeDetails ? (
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          {user !== null && <ImageUpload />}
          <Container>
            <Search />
            <HomeCategory />
            <Discount />
            <SliderHome />
            <Brands />
          </Container>
          <Footer />
        </Container>
      )}
    </>
  );
};
