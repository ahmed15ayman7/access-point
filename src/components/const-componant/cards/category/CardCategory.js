import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WaterPlay } from "../../../../assets/audios/SoundPlay";
import "../CardsStyle.css";
export const CardCategory = ({ category, products, slid }) => {
  return (
    <div
      className={`${
        slid ? "" : "col-lg-2 col-md-3 col-sm-4 col-6 "
      } mt-5 mb-5 div-category`}>
      <Card className="card-category mb-4 p-3">
        <Card.Img variant="top" src={products} />
      </Card>
      <Link
        to={"/all-category"}
        onClick={() => WaterPlay()}
        style={{ textDecoration: "none" }}>
        <Card.Text className="name-category">{category}</Card.Text>
      </Link>
    </div>
  );
};
