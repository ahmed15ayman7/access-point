import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Lodding } from '../../components/const-componant/Lodding/Lodding'

export const AddProduct = () => {
    const [details, setDetails] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [count, setCount] = useState('')
    const [rate, setRate] = useState('')
    let users=useSelector(state=>state.users.users)
    let products=useSelector(state=>state.getDate.products)
    let categorySet=new Set(products.map(e=>e.category))
    let categoryArray=[...categorySet];
    const handelClick=()=>{
    console.log([image,title,category,details,price,count,rate].join('//'))
    }
    
  return (<>
  {products.length===0&&users.length===0?(
            <Container><Row  style={{justifyContent:'center'}}>
                <Col lg={4} style={{display:'flex',justifyContent:'center'}}>
                <Lodding/>
                </Col>
              </Row></Container>):
            (
    <Container className="pt-2 ">
      <div>
      <Row  style={{ justifyContent: "center" }} className='m-lg-5 mt-1 m-1'>
        
        <Col
          lg={6}
          md={11}
          xs={11}
          style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              color: "#fff",
              justifyContent: "space-center",
              zIndex:'20'
            }}>
          <Form.Group  className='col-12 mb-3 '  controlId="validationFormik01">
            <Form.Control
              as="input"
              name="image"
              style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
              placeholder='Enter product Image'
              onChange={(e)=>setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group  className='col-12 mb-3' controlId="validationFormik01">
            <Form.Control
              as="textarea"
              name="Title"
              rows={1}
              style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
              placeholder='Enter product Title'
              onChange={(e)=>setTitle(e.target.value)}
             
            />
          </Form.Group>
          <Form.Group className='col-12  mb-3'>
          <Form.Select aria-label="Default select example"
          style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
          onChange={(e)=>setCategory(e.target.value)}
          >
            {categoryArray.map((a,i)=>
            <option key={i} value="">{a}</option>
              )}
          </Form.Select>
          </Form.Group>
          
          <Form.Group className='col-12 mb-3'controlId="validationFormik01">
            <Form.Control
              as="textarea"
              name="details"
              rows={1}
              style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
              placeholder='Enter product Details'
              onChange={(e)=>setDetails(e.target.value)}
             
            />
          </Form.Group>
          <Form.Group className='col-12 mb-3'  controlId="validationFormik01">
            
            <Form.Control
              as="input"
              name="Price"
              type="number"
              min={0}
              style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
              placeholder='Enter product Price'
              onChange={(e)=>setPrice(e.target.value)}
             
            />
          </Form.Group>
          <Form.Group className='col-12  mb-3' controlId="validationFormik01">
            
            <Form.Control
              as="input"
              name="count"
              type="number"
              min={0}
              style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
              placeholder='Enter product count'
              onChange={(e)=>setCount(e.target.value)}
             
            />
          </Form.Group>
          <Form.Group className='col-12 mb-3'  controlId="validationFormik01">
            
            <Form.Control
              as="input"
              name="rate"
              type="number"
              className=""
              max={5}
              min={0}
              style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
              placeholder='Enter product Rate'
              onChange={(e)=>setRate(e.target.value)}
             
            />
          </Form.Group>
          <div className="col-12  mb-4" style={{ justifyContent: "center",flexWrap:'wrap' }}>
              <Button
                className="btn-more-2"
                variant=""
                onClick={handelClick}
                style={{ border: "none" }}>
                Add Product
              </Button>
          </div>
        </Col>
        </Row>
      </div>
      
    </Container>)}
                  </>
  );
}
