import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TypeAndMore } from "../../../Home/TypeAndMore/TypeAndMore";
import CardProduct from "./CardProduct";

export const CardsProductMap = () => {
  let products = useSelector((s) => s.getDate.products);
  let rundomProduct = Math.random();
  let pro_slice = rundomProduct.toString().slice(2, 3);
  return (
    <Row className="" style={{ justifyContent: "space-evenly" }}>
      <TypeAndMore title={"Products"} more={"more"} link={"products"} />
      {products
        .slice(pro_slice)
        .map((e, i) =>
          i < 4 ? (
            <CardProduct
              key={i}
              img={e.image}
              price={e.price}
              rate={e.rating.rate}
              id={e.id}
              title={e.title}
            />
          ) : null
        )}
    </Row>
  );
};
