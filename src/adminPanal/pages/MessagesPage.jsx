import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MessageAdmin from '../components/MessageAdmin'

export const MessagesPage = () => {
    let messages=useSelector(e=>e.messages)
  return (
    <Container>
        <Row style={{justifyContent:'space-evenly'}}>
            {messages.map(e=>
                <MessageAdmin img={e.image} name={e.username} key={e} phone={e.phone} message={e.message} timeStamp={e.timeStamp} />
                )}
        </Row>
    </Container>
  )
}
