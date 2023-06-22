
import { Card } from "react-bootstrap";
import "../../components/const-componant/cards/CardsStyle.css";

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";



function CardOrder(props) {
  let navigate=useNavigate()
  let fullSaccand=0
  let fullMinutes=0
  let fullHours=0
  let fullDay=0
  let fullYear=0
  const first = useRef(),
  time=new Date().getTime(),
  oldTime=props.timeStamp.seconds;
  fullSaccand=parseInt((time/1000)-oldTime);
            fullMinutes=parseInt(fullSaccand/60)===0?'':parseInt(fullSaccand/60);
            fullHours=parseInt(fullMinutes/60)===0?'':parseInt(fullMinutes/60);
            fullDay=parseInt(fullHours/24)===0?'':parseInt(fullHours/24);
            fullYear=parseInt(fullHours/365.25)===0?'':parseInt(fullHours/365.25);
            let fullTime=(fullYear===''?'':fullYear+'y : ')+(fullDay===''?'':fullDay+'d : ')+(fullHours===''?'':fullHours>=24?fullHours%24+'h : ':fullHours+'h : ')+(fullMinutes===''?'':fullMinutes>=60?fullMinutes%60+'m ':fullMinutes+'m ')
 
  return (
    <div
      className={`col-lg-${props.col_lg ? props.col_lg : 3} col-md-${
        props.col_md ? props.col_md : 4
      } col-sm-${props.col_sm ? props.col_sm : 6} col-${
        props.col ? props.col : 12
      } mt-3 mb-3`}
      ref={first}>
      <Card className="card-product" style={{cursor:'pointer'}} onClick={e=>navigate('/order/'+props.id)}>
        <Card.Img variant="top" className="img" src={props.img} />
        <Card.Body>
          <Card.Text className=""style={{color: "#000000"}}>
              {props.name}
          </Card.Text>
          <Card.Text className="mb-4"style={{color: "#000000"}}>
            number of Prouducts :  {props.products.length}
          </Card.Text>
          <p style={{fontFamily:'sans-serif',position:'absolute',bottom:'0',right:'2%',color:'#1286a3'}}>{fullTime!==''?fullTime:'now'}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardOrder;
