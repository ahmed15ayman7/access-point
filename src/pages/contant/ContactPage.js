import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../components/const-componant/footer/Footer";
import ContantForm from "../../components/content/ContactForm";

export const ContantPage = () => {
  return (
    <>
      <Container
        className="p-lg-4 pt-lg-1 pt-5 mt-5 text-white"
        style={{ overflow: "hidden" }}>
        <Row className="p-lg-4 m-lg-5 m-2 mb-lg-1 pb-lg-1 pt-5">
          <Col className="p-lg-5 m-lg-5 m-2 mb-lg-1 pb-lg-1">
            <ContantForm />
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-2 mt-5">
        <Footer />
      </Container>
    </>
  );
};
