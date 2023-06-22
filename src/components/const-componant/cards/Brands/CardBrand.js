import React from "react";
import { Card } from "react-bootstrap";
import "../CardsStyle.css";
import { Link } from "react-router-dom";
import { WaterPlay } from "../../../../assets/audios/SoundPlay";
export const CardBrand = ({ img }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-5 mb-5 div-Brand">
      <Link
        to={"/all-brand"}
        onClick={() => WaterPlay()}
        style={{ textDecoration: "none", color: "#ffffff" }}>
        <Card className="card-Brand mb-4">
          <Card.Img variant="top" src={img.image} />
          <h5>{img.name}</h5>
        </Card>
      </Link>
    </div>
  );
};
