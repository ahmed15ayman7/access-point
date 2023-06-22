
import { Card } from "react-bootstrap";
import "../../components/const-componant/cards/CardsStyle.css";

import React, { useRef } from "react";



function CardUsers(props) {
  const first = useRef();
  
  return (
    <div
      className={`col-lg-${props.col_lg ? props.col_lg : 3} col-md-${
        props.col_md ? props.col_md : 4
      } col-sm-${props.col_sm ? props.col_sm : 6} col-${
        props.col ? props.col : 12
      } mt-3 mb-3`}
      ref={first}>
      <Card className="card-product">
        <Card.Img variant="top" className="img" src={props.img} />
        <Card.Body>
          <Card.Text className=""style={{color: "#000000"}}>
              {props.name}
          </Card.Text>
          <Card.Text className=""style={{color: "#000000"}}>
              {props.phone}
          </Card.Text>
          <Card.Text className=""style={{color: "#000000"}}>
              {props.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardUsers;
