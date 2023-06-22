import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Footer } from '../../components/const-componant/footer/Footer'
import { Lodding } from '../../components/const-componant/Lodding/Lodding'
import { EditProfile } from '../../components/profile/EditProfile'
import { ImageUpload } from '../../components/profile/ImageUpload'
import { Logout } from '../../components/profile/logout'
import { ProfileDetails } from '../../components/profile/profileDetails'
import { initializeDetails } from '../../redux/reducer/reducerRegister/reducerAuth'

export const ProfilePage = () => {
  let userDetails =useSelector(e=>e.userDetails.details)[0]
  const [first, setfirst] = useState(false)

  useEffect(() => {
    initializeDetails===userDetails?setfirst(true):setfirst(false)
    
  }, [userDetails])
  
  return (first?<Container><Row  style={{justifyContent:'center'}}>
                <Col lg={4} style={{display:'flex',justifyContent:'center'}}>
                <Lodding/>
                </Col>
              </Row></Container>:
    <Container className='pt-5'>
    <ImageUpload/>
    <ProfileDetails/>
    <EditProfile/>
    <Logout/>
    <Footer/>
  </Container>
    
  )
}
