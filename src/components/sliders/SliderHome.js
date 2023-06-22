import { useSelector } from "react-redux";
import CardProduct from "../const-componant/cards/product/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderStyle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { TypeAndMore } from "../Home/TypeAndMore/TypeAndMore";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function SliderHome() {
  let products = useSelector((s) => s.getDate.products);
  const breakpoints = {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    autoplay = {
      delay: 7000,
      disableOnInteraction: true,
      waitForTransition: true,
    };
  return (
    <>
      <TypeAndMore title={"Products"} more={"more"} link={"products"} />
      <Swiper
        style={{
          position: "relative",
          "--swiper-navigation-position": "absolute",
          "--swiper-navigation-color": "#1286a3",
          "--swiper-pagination-color": "#1286a3",
        }}
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        autoplay={autoplay}
        breakpoints={breakpoints}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        onSwiper={(swiper) => {}}
        // onSlideChange={() =>{}}
      >
        {products
          .filter((e) => e.title.length <= 70)
          .map((e, i) =>
            i < 15 ? (
              <SwiperSlide key={i}>
                <CardProduct
                  col_lg={20}
                  col_md={20}
                  col_sm={20}
                  col={20}
                  img={e.image}
                  price={e.price}
                  rate={e.rating.rate}
                  id={e.id}
                  title={e.title}
                />
              </SwiperSlide>
            ) : null
          )}
        <SwiperSlide>
          <div className="mt-5 slide-more rounded-3">
            <Link to={"/products"}>
              <Button
                variant=""
                className="btn-more-2"
                style={{ height: "50px" }}>
                More
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderHome;
