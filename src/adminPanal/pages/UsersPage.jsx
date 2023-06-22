import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CardUsers from '../components/CardUsers'

export const Users = () => {
    let users =useSelector(s=>s.users.users)

  return (<Container>
    <Row style={{justifyContent:'space-evenly'}}>

      {
        users.map((e,i)=>
          <CardUsers key={i} img={e.image} name={e.firstName+' '+e.lastName} email={e.email} phone={e.phone}/>
          ) 
        }
        </Row>
        </Container>
  )
}
