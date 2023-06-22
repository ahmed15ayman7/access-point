import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CardOrder from '../components/CardOrder'

export const OrdersPage = () => {
    let orders=useSelector(e=>e.orders)
  return (
    <Container>
    <Row style={{justifyContent:'space-evenly'}}>

      {
        orders.map(e=>
          <CardOrder key={e} id={e.id} img={e.image} name={e.firstName+' '+e.lastName} email={e.email} phone={e.phone} products={e.products} timeStamp={e.timeStamp}/>
          ) 
        }
        </Row>
        </Container>
  )
}
