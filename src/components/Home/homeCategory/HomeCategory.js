import React from "react";
import { Container } from "react-bootstrap";
import { CardsCategory } from "../../const-componant/cards/category/CardsCategory";
import { TypeAndMore } from "../TypeAndMore/TypeAndMore";

export const HomeCategory = () => {
  return (
    <Container>
      <TypeAndMore title={"Category"} more={"more"} link={"/all-category"} />
      <CardsCategory />
    </Container>
  );
};
