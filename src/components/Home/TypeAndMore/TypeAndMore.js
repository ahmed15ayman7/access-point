import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WaterPlay } from "../../../assets/audios/SoundPlay";
import "./TypeAndMore.css";

export const TypeAndMore = ({ title, more, link }) => {
  return (
    <div
      className="w-100 d-flex justify-content-between mt-4"
      style={{ color: "#ffffff" }}>
      <h5>{title}</h5>
      {more ? (
        <Button variant="" onClick={() => WaterPlay()} className="btn-more">
          <Link to={link} style={{ textDecoration: "none" }}>
            More
          </Link>{" "}
        </Button>
      ) : null}
    </div>
  );
};
