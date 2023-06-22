import React from 'react'
import {  Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const ProfileDetails = () => {
    let userDetails =useSelector(e=>e.userDetails.details)[0]
  return (
    <Row className='mt-5 pt-5' style={{justifyContent:'space-evenly',color:'#ffffff'}}>
        <Col lg={4} md={5} className='text-start mt-5'><h5>Username: {userDetails.firstName} {userDetails.lastName}</h5></Col>
        <Col lg={5} md={7}   className='text-start mt-5'><h5>Email: {userDetails.email}</h5></Col>
        <Col lg={3}  className='text-start mt-5'>{userDetails.phone!==''?<h5>phone: +{userDetails.zip} {userDetails.phone}</h5>:null}</Col>
        <Col lg={12} className='text-start mt-5'>{userDetails.address+userDetails.address2+userDetails.city+userDetails.state!==''?<h5>Address: {userDetails.address2}{'->'}{userDetails.address}{'->'}{userDetails.city}{'->'}{userDetails.state}</h5>:null}</Col>
        <Col lg={12} className='text-start mt-5 mb-5'>{userDetails.country!==''?<h5>Country: {userDetails.country}</h5>:null}</Col>
    </Row>
  )
}
