import React from "react";
import { ToastContainer } from "react-bootstrap";
import { PopopItem } from "./PopopItem";
import "./PopopsStyle.css";

function Popops(props) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="popops"
      style={{ minHeight: "240px" }}>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <PopopItem />
      </ToastContainer>
    </div>
  );
}

export default Popops;
