import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const DashCard = ({title,desc,link}) => {
  return (
    <div  className={`col-lg-3 col-md-6 col-sm-6 col-12  mt-5 mb-5`} >
    <Card className='mb-4 p-3' style={{backgroundColor:'rgba(0,0,0,.3)'}}>
    <Link to={link}  style={{textDecoration:'none',color:'white'}}>
        <Card.Title className='fs-4'>
            {title}
        </Card.Title>
    <Card.Text>
          {desc}
        </Card.Text>
    </Link>
    </Card>
    </div>
  )
}
