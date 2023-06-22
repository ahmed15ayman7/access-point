import React from 'react'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { WaterPlay } from '../../assets/audios/SoundPlay'

import { SignOutType, urlImage } from '../../redux/types/registerType'

export const Logout = () => {
let dipatch=useDispatch()
let navigate=useNavigate()

    return (
    <Row style={{justifyContent:'center',position:'absolute',top:'4%',right:'10%',}}>
        <Col lg={3} md={4} sm={5} xs={9} style={{position:'relative'}}>
        <OverlayTrigger
          placement={'bottom'}
          overlay={
            <Tooltip id={`tooltip-bottom`}>
              <strong>Logout</strong>
            </Tooltip>
          }
          >
       
        <Button variant='' className='btn-more' onClick={e=>{navigate('/login');WaterPlay();dipatch({type:SignOutType});dipatch({type:urlImage,pyload:''})}} ><i className="fa-solid fa-right-from-bracket"></i></Button>
        
        </OverlayTrigger>
        </Col>
    </Row>
    

  )
}
