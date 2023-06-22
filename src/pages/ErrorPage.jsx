import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export const ErrorPage = () => {
    let parm=useParams()
  return (
    <Container className='mt-5 pt-5'>
        <Row style={{justifyContent:'center',color:'#ffffff'}}>
            <Col lg={7} md={9} sm={10} xs={11}><h1>Error 404</h1><h2>{parm?parm['*']:'This'} page not found</h2></Col>
        </Row>
        <Row className='mt-5' style={{justifyContent:'center',color:'#ffffff'}}>
            <Col lg={7} md={9} sm={10} xs={11}><Link to={'/'}><Button variant='' className='btn-more-2'>Go to home</Button></Link></Col>
        </Row>
    </Container>
  )
}
