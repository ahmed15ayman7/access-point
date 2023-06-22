import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProductAdmin from '../components/CardProductAdmin'
export const OrderPage = () => {
    let orderPar = useParams()
    let idOrder=orderPar.id
    let orders=useSelector(s=>s.orders)
    let products=useSelector(s=>s.getDate.products)
    let order= orders.filter(e=>e.id===idOrder)[0]
    
  return (
    order!==undefined?
        
    <Container>
        <Row><div style={{position:'absolute',top:'14%',left:'50%',transform:'translateX(-50%)',width:'150px',height:'90px'}}>
        <Image src={order.image} fluid roundedCircle style={{cursor:'pointer',width:'90px',height:'100%'}}/>
            </div></Row>
        <Row className='mt-5 pt-5' style={{justifyContent:'space-evenly',color:'#ffffff'}}>
        <Col lg={4} md={5} className='text-start mt-5'><h5>Username: {order.firstName} {order.lastName}</h5></Col>
        <Col lg={5} md={7}   className='text-start mt-5'><h5>Email: {order.email}</h5></Col>
        <Col lg={3}  className='text-start mt-5'>{order.phone!==''?<h5>phone: +{order.zip} {order.phone}</h5>:null}</Col>
        <Col lg={12} className='text-start mt-5'>{order.address+order.address2+order.city+order.state!==''?<h5>Address: {order.address2}{'->'}{order.address}{'->'}{order.city}{'->'}{order.state}</h5>:null}</Col>
    </Row>
        <Row style={{justifyContent:'space-evenly'}}>
        {order.products.map(a=>products.map(e=>e.id===a.id?{...e,qty:a.quantity}:false).filter(e=>e!==false))[0].map(e=>
            <CardProductAdmin  key={e}  img={e.image} price={e.price} rate={e.rating.rate} id={e.id} title={e.title} qty={e.qty} />)} 
        </Row>
    </Container>:<Container></Container>
  )
}
