import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Lodding } from '../../components/const-componant/Lodding/Lodding'
import { AddProduct } from '../components/AddProduct'
import CardProductAdmin from '../components/CardProductAdmin'


export const ProductsAdminPage = () => {
    let products =useSelector(s=>s.getDate.products)
    let chProduct=[]
    if (products.length===0) {
      chProduct=[{
        image:'',
        price:'',
        id:'',
        title:'',
        rating:{rate:''},
      }]
    }else{
      chProduct=products
    }
  return (
            
     products.length===0?
     <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <Lodding />
            </Col>
          </Row>
        </Container>:
    <Container>
      <AddProduct/>
        <Row>
        {
            chProduct.map((e,i)=><CardProductAdmin key={i}  img={e.image} price={e.price} rate={e.rating.rate} id={e.id} title={e.title}/>)
            
          }
        </Row>
    </Container>
  )
}
