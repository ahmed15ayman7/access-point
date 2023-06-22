import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./CardsStyle.css";
import { useSelector } from "react-redux";
import { WaterPlay } from "../../../assets/audios/SoundPlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

export const Discount = () => {
  let products = useSelector((s) => s.getDate.products);
  let navigation = useNavigate();
  let autoplay = {
    delay: 5000,
    disableOnInteraction: true,
    waitForTransition: true,
  };
  return (
    <Swiper
      style={{ backgroundColor: "transparent" }}
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={autoplay}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}>
      {" "}
      {products.reverse().map((e, i) =>
        0 < i && i < 10 ? (
          <SwiperSlide key={i}>
            <Container
              className="discount"
              onClick={() => {
                WaterPlay();
                navigation(`product-details/${e.id}`);
              }}>
              <Row
                key={i}
                style={{ justifyContent: "space-evenly", alignItems: "center" }}
                className="discount">
                <Col lg={4} md={5} sm={6}>
                  <h4>Discount {10 + 5 * (i + 1)} %</h4>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <img src={e.image} alt="" className="img-fluid img p-3" />
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
};
