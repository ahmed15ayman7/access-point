import React, { useState } from "react";
import { Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../Home/TypeAndMore/TypeAndMore.css";
import "./proDetStyle.css";
import DivStars from "../stars/divStars";
import { useSelector } from "react-redux";
import { Lodding } from "../const-componant/Lodding/Lodding";
import { Comments } from "./Comments";
import { AddComment } from "./AddComment";
import { DonePlay, ErrorPlay, Like2Play, LikePlay } from "../../assets/audios/SoundPlay";

export const ProductDetails = () => {
    const [first, setfirst] = useState('none')
  let clasBtn=first==='none'?'btn-more-2':'btn-delete'
  const handelClick=()=>{
    first==='none'?setfirst(''):setfirst('none')
    first==='none'?DonePlay():ErrorPlay()
  }
  let products=useSelector(state=>state.getDate.products)
  let users=useSelector(state=>state.users.users)
  let parmiter=useParams()
  let id=+parmiter.id
    
  return (<>
  {products.length===0&&users.length===0?(
            <Container><Row  style={{justifyContent:'center'}}>
                <Col lg={4} style={{display:'flex',justifyContent:'center'}}>
                <Lodding/>
                </Col>
              </Row></Container>):
            (
    <Container fluid className="mt-5 pt-5">
      {products.map((e,i)=>e.id===id?<div key={i}>
      <Row  style={{ justifyContent: "space-evenly" }} className='mb-5'>
        <Col lg={5} md={11} xs={11} style={{zIndex:'20'}}>
          <Image
            src={e.image}
            style={{ height: "50vh" ,boxShadow:'0 0 15px 1px #111111,0 0 15px #ffffff'}}
            fluid
            rounded
            />
        </Col>
        <Col
          lg={6}
          md={11}
          xs={11}
          style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              color: "#fff",
              justifyContent: "space-evenly",
              zIndex:'20'
            }}>
          <h1>{e.title}</h1>
          <h6>Category: {e.category}</h6>
          <p>details: {e.description}</p>
          <p>price: {e.price}$</p>
          <div className="d-flex" style={{ justifyContent: "start",flexWrap:'wrap' }}>
            
            <Button variant="" className="heart-d mt-3 mb-5 " style={{ border: "none"}} >
              
              <i
                className={`fa-solid fa-cart-plus fa-lg`}
                style={{ color: "#FFFFFF" }} onClick={(e) => {
                    e.target.classList.toggle("fa-cart-shopping");
                    e.target.classList.toggle("fa-cart-plus");
                    e.target.classList.toggle("clicked");
                    Like2Play()
                }}
                />
            </Button>
            <Button variant="" className="me-3  mt-3 mb-5  heart-d " style={{ border: "none"}}>
              
              <i
                className={`fa-regular fa-heart fa-lg`}
                style={{ color: "#FFFFFF" }}
                onClick={(e) => {
                    e.target.classList.toggle("fa-regular");
                    e.target.classList.toggle("fa-solid");
                    e.target.classList.toggle("clicked");
                    LikePlay()
                }}/>
            </Button>
            <div  className='mt-3 mb-5  d-flex divstar' style={{justifyContent:'center'}}>
        <DivStars count={e.rating.count}/>
        </div>
        <div style={{position:'relative'}} className='w-100 mb-3'>
        <OverlayTrigger
          placement={'right'}
          overlay={
            <Tooltip id={`tooltip-right`}>
              <strong>Add Comment</strong>
            </Tooltip>
          }
          >
       
        <Button variant='' className={clasBtn} onClick={handelClick} ><i className="fa-solid fa-message"></i></Button>
        
        </OverlayTrigger>
        </div>
            <Link to={"/"} className='w-100'>
              <Button
                className="btn-more-2"
                variant=""
                style={{ border: "none" }}>
                {" "}
                Go to Access Point
              </Button>
            </Link>
            
          </div>
        </Col>
        </Row>
        <AddComment first={first} product={e} setfirst={setfirst}/>
        <Comments product={e}/>
      </div>
      :null)}
    </Container>)}
                  </>
  );
};
