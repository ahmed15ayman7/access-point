import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LikePlay } from '../../assets/audios/SoundPlay'
import logo from '../../assets/images/defLogo.png'
import './proDetStyle.css'
export const Comments = ({product}) => {
    let users=useSelector(e=>e.users.users)
    let comments=product.messages
    let time=new Date().getTime();
    let fullSaccand=0
    let fullMinutes=0
    let fullHours=0
    let fullDay=0
    let fullYear=0
    const [image, setImage] = useState(logo)
    useEffect(() => {
        let imageAndname=()=>{
            let images=[]
            comments.map(e=>users.filter(a=>a.id===e.id).map((a)=>{images.push(a.image===''?logo:a.image);return a;}));
            setImage(images)
        }
        imageAndname();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (comments.length!==0?<Container className='m-lg-5 p-lg-5'>
    <h1 style={{color:'white'}}>Comments</h1>
    <p style={{color:'white'}}>{comments.length} comment</p>
    <Row style={{justifyContent:'center',color:'#1286a3'}} className='m-lg-5'>
        {comments.map((e,i)=>{
            
            fullSaccand=parseInt((time-e.time)/1000);
            fullMinutes=parseInt(fullSaccand/60)===0?'':parseInt(fullSaccand/60);
            fullHours=parseInt(fullMinutes/60)===0?'':parseInt(fullMinutes/60);
            fullDay=parseInt(fullHours/24)===0?'':parseInt(fullHours/24);
            fullYear=parseInt(fullHours/365.25)===0?'':parseInt(fullHours/365.25);
            let fullTime=(fullYear===''?'':fullYear+'y : ')+(fullDay===''?'':fullDay+'d : ')+(fullHours===''?'':fullHours>=24?fullHours%24+'h : ':fullHours+'h : ')+(fullMinutes===''?'':fullMinutes>=60?fullMinutes%60+'m ':fullMinutes+'m ')
            return(<Col lg={7} key={i} md={9} sm={11} style={{display:'flex',position:'relative',justifyContent:'space-between',background:'#ffffff',borderRadius:'25px',height:'auto',alignItems:'center'}} className='mt-5 p-1'>
            <div style={{borderRight:'2px solid #1286a3'}} className='imgUser me-3'>
            <Image src={image[i]!==undefined?image[i]:e.image!==''?e.image:logo} style={{width:'50px',height:'50px',border:'2px solid #024d76',}} className='me-3 mt-1 ms-1' roundedCircle fluid/>
            <p>{e.name}</p>
            </div>
            <p className='text-start'style={{flexGrow:'1'}}>{e.message}</p>
            <p style={{fontFamily:'sans-serif',position:'absolute',bottom:'0',right:'2%',color:'#1286a3'}}>{fullTime!==''?fullTime:'now'}</p>
            <i className="fa-regular fa-thumbs-up fa-xl ms-2 me-2 mb-2" style={{cursor:'pointer'}}  onClick={e=>{e.target.classList.toggle('fa-regular');e.target.classList.toggle('fa-solid');LikePlay()}}></i>
        </Col>)})}
    </Row>
  </Container>:<></>
  )
}
//? 51729165