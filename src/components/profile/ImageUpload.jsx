
import React, { useEffect, useState } from 'react'
import { Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { WaterPlay } from '../../assets/audios/SoundPlay'
import logo from '../../assets/images/defLogo.png'
import { initializeDetails } from '../../redux/reducer/reducerRegister/reducerAuth'
export const ImageUpload = () => {
    let navigate=useNavigate()
    let image=useSelector(e=>e.userImage)
    let userDetails =useSelector(e=>e.userDetails.details)[0]
    let photo=image!==''?image:userDetails.image!==''?userDetails.image:logo;
    
    const [first, setfirst] = useState(false)
    useEffect(() => {
      initializeDetails===userDetails?setfirst(true):setfirst(false)
      
    }, [userDetails])
  return (first===false?
    <Row>
        <div style={{position:'absolute',top:'7%',left:'50%',transform:'translateX(-50%)',width:'150px',height:'90px'}}>
        <OverlayTrigger
        
          placement={'bottom'}
          overlay={
            <Tooltip id={`tooltip-bottom`}>
              my <strong>profile</strong>
            </Tooltip>
          }
        >
       
        <Image src={photo} fluid roundedCircle onClick={e=>{navigate('/profile');WaterPlay()}} style={{cursor:'pointer',width:'90px',height:'100%'}}/>
        
        </OverlayTrigger>
        </div>
    </Row>:<></>
  )
}
