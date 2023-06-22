import React, { useState } from 'react'
import { Button, Col, Container, Form,  Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DonePlay, ErrorPlay } from '../../assets/audios/SoundPlay'
import { AddProductMessageOnDoc } from '../../redux/Firebase/AddDetails'
import { updateProduct } from '../../redux/types/update'


export const AddComment = ({first,product,setfirst}) => {
    const [message, setMessage] = useState('')
    let dispatch=useDispatch()
    let user=useSelector(e=>e.userDetails.details)[0];
    let handelClick =async(e)=>{
        e.preventDefault()
    product.messages.push({id:user.id,name:user.firstName+' '+user.lastName,image:user.image,message:message,time:new Date().getTime()})
    if (message!=='') {
        await AddProductMessageOnDoc(product.id,product.messages).then((e)=>{dispatch({type:updateProduct});setfirst('none');setMessage('');DonePlay()}).catch((e)=>{ErrorPlay();console.log(e)})
    }
    
}
    return (<>
    <Container style={{display:first}}>
        <Form >
          <Row className="mb-3" style={{justifyContent:'center'}}>
            <Form.Group  className='col-lg-6 col-md-8 col-9' controlId="validationFormik01">
              <Form.Control
                as="textarea"
                name="message"
                value={message}
                style={{borderRadius:'25px',boxShadow: 'inset 3px 3px 10px  #777777 ,inset -3px -3px 10px 10px #ffffff'}}
                placeholder='Enter your comment'
                onChange={(e)=>setMessage(e.target.value)}
               
              />
            </Form.Group>
            <Col className='col-lg-1 col-2'>
            <Button type="submit" variant='' onClick={handelClick} className='btn-more-2'><i className="fa-solid fa-paper-plane"></i></Button>
            </Col>
            </Row>
            
        </Form>
    </Container>
          </>
  )
}
