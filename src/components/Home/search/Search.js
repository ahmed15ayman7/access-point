import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WaterPlay } from "../../../assets/audios/SoundPlay";
import { FilterSearch } from "../../../redux/types/filterType";
import "./Search.css";

export const Search = () => {
  const first = useRef(null);
  let products = useSelector((s) => s.getDate.products);
  let dispatch = useDispatch();
  let handelChange = (e) => {
    dispatch({ type: FilterSearch, products: products, name: e });
  };
  return (
    <>
      <Form className="d-flex flex-row-reverse pt-lg-4 pt-5 mt-lg-1 mt-3 ">
        <Link to={"/products"}>
          <Button
            variant=""
            className="btn-search"
            onClick={() => {
              first.current.classList.toggle("show-search");
              WaterPlay();
            }}>
            <i
              className="fa-solid fa-magnifying-glass fa-lg"
              style={{ color: "#ffffff" }}></i>
          </Button>
        </Link>
        <Form.Control
          ref={first}
          type="search"
          placeholder="Search"
          className="me-2 search"
          aria-label="Search"
          onChange={(e) => handelChange(e.target.value)}
          style={{
            color: "#ffffff",
            opacity: "0",
            zIndex: "-1",
            transform: "translateX(-90%)",
          }}
        />
      </Form>
    </>
  );
};
