import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { DashCard } from '../components/DashCard'
import {Images} from '../../assets/images/images'
export const DashboardPage = () => {
let products=useSelector(e=>e.getDate.products);
let users=useSelector(e=>e.users.users);
let classesProducts = new Set(products.map((e) => e.category));

let orders=useSelector(e=>e.orders);
let messages=useSelector(e=>e.messages);
let admins=[1];
let ordersP=orders;
let ordersC=[];


let divProducts=<>
<h6>{products.length} products</h6>
<h6>{[...classesProducts].length} Category</h6>
<h6>{Images.length} Brands</h6>
</>
let divUsers=<>
<h6>{users.length} Users</h6>
<h6>{admins.length} Admins</h6>
<h6>{[...users,...admins].length} All</h6>
</>
let divOrders=<>
<h6>{orders.length} Orders</h6>
<h6>{ordersP.length} Pendding</h6>
<h6>{ordersC.length} Complete</h6>
</>
let divMessages=<>
<h6>{messages.length} Messages</h6>
<h6>{messages.length} Waiting</h6>
<h6>{0} Replayed</h6>
</>


let cartsDitails=[
    {title:'Products',desc:divProducts,link:'/dashboard/products'},
    {title:'Users',desc:divUsers,link:'/dashboard/users'},
    {title:'Orders',desc:divOrders,link:'/dashboard/orders'},
    {title:'Messages',desc:divMessages,link:'/dashboard/messages'},
]
  return (
    <Container fluid className='pt-5 text-white'>
        <Row>
        </Row>
        <Row>
        {cartsDitails.map(e=>
        <DashCard key={e} title={e.title} desc={e.desc} link={e.link}/>
            )}
        </Row>
    </Container>
  )
}
