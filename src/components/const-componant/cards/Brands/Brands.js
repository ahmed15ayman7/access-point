import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Images } from "../../../../assets/images/images";
import { TypeAndMore } from "../../../Home/TypeAndMore/TypeAndMore";
import { CardBrand } from "./CardBrand";

export const Brands = () => {
  const [count6, setcount6] = useState([+sessionStorage.getItem("count6")]);
  setInterval(() => {
    setcount6([+sessionStorage.getItem("count6")]);
  }, 10000);

  return (
    <Row style={{ justifyContent: "space-evenly" }}>
      <TypeAndMore title={"Brand"} more={"more"} link={"/all-brand"} />
      {Images.slice(count6[0]).map((e, i) =>
        i <= 5 ? <CardBrand key={i} img={e} /> : null
      )}
    </Row>
  );
};
