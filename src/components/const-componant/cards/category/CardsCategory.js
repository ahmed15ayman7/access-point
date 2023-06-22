import React from "react";
import { useSelector } from "react-redux";
import { CardCategory } from "./CardCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
export const CardsCategory = () => {
  let products = useSelector((e) => e.getDate.products);
  let category = new Set(products.map((e) => e.category));
  // eslint-disable-next-line array-callback-return
  let categoryImage = [...category].map(
    (a) =>
      products
        .map((e) => {
          if (a === e.category) {
            return e.image;
          }
          return undefined;
        })
        .filter((e) => e !== undefined)[0]
  );
  const breakpoints = {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    autoplay = {
      delay: 10000,
      disableOnInteraction: true,
      waitForTransition: true,
    };

  return (
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
      {[...category].map((e, i) => {
        return i <= 6 ? (
          <SwiperSlide key={i}>
            <CardCategory
              key={i}
              category={e}
              slid={true}
              products={categoryImage[i]}
            />
          </SwiperSlide>
        ) : null;
      })}
    </Swiper>
  );
};
