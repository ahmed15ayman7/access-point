import React, { useState } from 'react'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { DonePlay, ErrorPlay } from '../../assets/audios/SoundPlay'
import ProfileUpdate from './profileUpdate'


export const EditProfile = () => {
  const [first, setfirst] = useState('none')
  let clasBtn=first==='none'?'btn-more-2':'btn-delete'
  const handelClick=()=>{
    first==='none'?setfirst('flex'):setfirst('none')
    first==='none'?DonePlay():ErrorPlay()
  }
    
    return (<>
    
    <Row style={{justifyContent:'center',position:'absolute',top:'15%',right:'10%'}}>
        <Col lg={3} md={4} sm={5} xs={9} style={{position:'relative'}}>
        <OverlayTrigger
          placement={'bottom'}
          overlay={
            <Tooltip id={`tooltip-bottom`}>
              <strong>Edit Profile</strong>
            </Tooltip>
          }
          >
       
        <Button variant='' className={clasBtn} onClick={handelClick} ><i className="fa-solid fa-user-pen"></i></Button>
        
        </OverlayTrigger>
        </Col>
    </Row>
    <Row style={{display:first,}}>
        <ProfileUpdate setfirst={setfirst}/>
    </Row>
          </>
  )
}
