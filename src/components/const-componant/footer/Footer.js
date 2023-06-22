import React from "react";
import {
  Col,
  Container,
  Nav,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { footerLinksPagesMore } from "./footerLinksPagesMore";
import { links } from "./links";
import { navLinks } from "../Navbars/NavLinks";
import { Link } from "react-router-dom";
import { WaterPlay, Like2Play } from "../../../assets/audios/SoundPlay";
import { useSelector } from "react-redux";

export const Footer = () => {
  let user = useSelector((e) => e.reducerAuth.profile);
  let checkProfile = user === null ? "Login page" : "Profile page";
  let checkUrl = user === null ? "/login" : "/profile";
  let navLinksUp = navLinks.map((e, i) =>
    i === 3 ? { name: checkProfile, url: checkUrl, classIcon: e.classIcon } : e
  );
  return (
    <Container fluid className="footer-main">
      <Row className=" nav text-start p-2  justify-content-evenly  footer-main-grand">
        <Col lg={2} md={3} sm={5} xs={8}>
          <Row className="flex-column mb-3">
            <h4 className="mt-3">Pages Main:</h4>
            {navLinksUp.map((e, i) => (
              <OverlayTrigger
                key={i}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Go to <strong>{e.name}</strong>
                  </Tooltip>
                }>
                <Link
                  to={e.url}
                  className="mt-1 mb-1"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  onClick={() => WaterPlay()}>
                  <i className={e.classIcon} style={{ color: "#ffffff" }}></i>{" "}
                  {e.name}
                </Link>
              </OverlayTrigger>
            ))}
          </Row>
        </Col>
        <Col lg={1}></Col>
        <Col lg={2} md={3} sm={5} xs={8}>
          <Row className="flex-column mb-3">
            <h4 className="mt-3">Folow Me:</h4>
            {links.map((e, i) => (
              <OverlayTrigger
                key={i}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    folowing <strong>{e.name}</strong>
                  </Tooltip>
                }>
                <Nav.Link
                  onClick={() => Like2Play()}
                  eventKey={`link-${i + 1}`}
                  href={e.url}
                  target="_blank"
                  className="mt-1 mb-1 drop text-white">
                  <i className={e.classIcon} style={{ color: "#ffffff" }}></i>{" "}
                  {e.name}
                </Nav.Link>
              </OverlayTrigger>
            ))}
          </Row>
        </Col>
        <Col lg={1}></Col>
        <Col lg={2} md={3} sm={5} xs={9}>
          <Row className="flex-column mb-3">
            <h4 className="mt-3">More Pages:</h4>
            {footerLinksPagesMore.map((e, i) => (
              <OverlayTrigger
                key={i}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Go to <strong>{e.name}</strong>
                  </Tooltip>
                }>
                <Link
                  to={e.url}
                  className="mt-1 mb-1"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  onClick={() => WaterPlay()}>
                  <i className={e.classIcon} style={{ color: "#ffffff" }}></i>{" "}
                  {e.name}
                </Link>
              </OverlayTrigger>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="pb-5 p-lg-5 justify-content-evenly text-center ">
        <Col
          lg={6}
          md={8}
          sm={10}
          className="d-flex justify-content-center align-items-start ">
          &copy;<p>Copyright {new Date().getFullYear()} by</p>{" "}
          <p className="ms-2" style={{ color: "" }}>
            Ahmed Ayman
          </p>
        </Col>
      </Row>
    </Container>
  );
};
