  import React, { useState } from "react";
  import { Button, Col, Container, Image, Form, Row } from "react-bootstrap";
  import { useSelector } from "react-redux";
  import {  useNavigate, useParams } from "react-router-dom";
  import "../../components/Home/TypeAndMore/TypeAndMore.css";
  import "../../components/productDetails/proDetStyle.css";
  import { Lodding } from "../../components/const-componant/Lodding/Lodding";
  
  
  export const UpdateProduct = () => {
      const [details, setDetails] = useState('none')
      const [title, setTitle] = useState('none')
      const [category, setCategory] = useState('none')
      const [price, setPrice] = useState('none')
      let navigate= useNavigate()
      let products=useSelector(state=>state.getDate.products)
      let categorySet=new Set(products.map(e=>e.category))
      let categoryArray=[...categorySet];
      let users=useSelector(state=>state.users.users)
      let parmiter=useParams()
      let id=+parmiter.id
      let product=[...products.filter((e)=>e.id===id)][0]
      const handelClick=()=>{
       let nameAPI=product.api.name;
        if (nameAPI==='fakestoreapi') {
          fetch(product.api.url+'/'+product.api.uid,{
            method:"PUT",
            body:JSON.stringify(
                {
                  title: title,
                  description:details,
                  category:category,
                  price:price,
                
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        }else if (nameAPI==='route-ecommerce') {
          fetch(product.api.url+'/'+product.api.uid,{
            method:"PUT",
            body:JSON.stringify(
                {
                  title: title,
                  description:details,
                  category:{name:category},
                  price:price,
                
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        }else if (nameAPI==='dummyjson') {
          fetch(product.api.url+'/'+product.api.uid, {
          method: 'PUT', /* or PATCH */
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
          title: title,
          description:details,
          category:category,
          price:price,
        })
        })
        .then(res => res.json())
        .then(console.log);
        }
       
      }
      
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
          <Col lg={5} md={11} xs={11} style={{zIndex:'20'}} className='mb-5'>
            <Image
              src={product.image}
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
            <Form.Group  className='col-10 mb-3 d-flex' style={{justifyContent:"space-evenly"}} controlId="validationFormik01">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                as="textarea"
                name="details"
                className="ms-3 g-1"
                defaultValue={e.title}
                style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
                placeholder='Enter your comment'
                onChange={(e)=>setTitle(e.target.value)}
               
              />
            </Form.Group>
            <Form.Group className='col-10 d-flex mb-3' style={{justifyContent:'space-evenly'}}>
            <Form.Label>Category:</Form.Label>
            <Form.Select aria-label="Default select example"
            defaultValue={e.category}
            className=" ms-3 g-1"
            style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
            onChange={(e)=>setCategory(e.target.value)}
            >
              {categoryArray.map(a=>
              <option key={a} value="">{a}</option>
                )}
            </Form.Select>
            </Form.Group>
            
            <Form.Group className='col-10 d-flex mb-3' style={{justifyContent:'space-evenly'}} controlId="validationFormik01">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                name="details"
                className="ms-3 g-1"
                defaultValue={e.description}
                style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
                placeholder='Enter your comment'
                onChange={(e)=>setDetails(e.target.value)}
               
              />
            </Form.Group>
            <Form.Group className='col-10 d-flex mb-3' style={{justifyContent:'space-evenly'}} controlId="validationFormik01">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                as="input"
                name="details"
                type="number"
                className="ms-3 g-1"
                defaultValue={e.price}
                style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
                placeholder='Enter your comment'
                onChange={(e)=>setPrice(e.target.value)}
               
              />
            </Form.Group>
            
          <p>Count: {e.rating.count}</p>
            <div className="d-flex mb-4" style={{ justifyContent: "center",flexWrap:'wrap' }}>
                <Button
                  className="btn-more-2"
                  variant=""
                  onClick={handelClick}
                  style={{ border: "none" }}>
                  Update
                </Button>
            </div>
            <div className="d-flex " style={{ justifyContent: "center",flexWrap:'wrap' }}>
                <Button
                  className="btn-more"
                  variant=""
                  onClick={()=>navigate('/products')}
                  style={{ border: "none" }}>
                  Products
                </Button>
            </div>
          </Col>
          </Row>
        </div>
        :null)}
      </Container>)}
                    </>
    );
  };
  