import React, { useRef, useState } from "react";
import { Toast } from "react-bootstrap";

export const PopopItem = () => {
  let close = useRef();
  const [Close, setClose] = useState(true);
  return (
    <Toast
      className="popos-toast"
      ref={close}
      onClose={() => {}}
      show={Close}
      delay={3000}
      autohide>
      <Toast.Header closeButton={false}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small className="text-muted">just now</small>
        <strong
          className="ms-3"
          style={{ cursor: "pointer" }}
          onClick={() => setClose(false)}>
          <i className="fa-solid fa-xmark fa-xl" />
        </strong>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
      <div className="animation"></div>
    </Toast>
  );
};
