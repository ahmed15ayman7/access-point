import React from 'react'
import { Button, Container, Nav, Navbar, Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../../redux/Firebase/Firebase';
import { LoginAdminType } from '../../redux/types/registerType';
import './Style.css'

export const NavBarDash = () => {
    let navigate=useNavigate()
    let dispatch=useDispatch()
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand}  expand={expand} className="mb-3 pt-3" style={{backgroundColor:'rgba(0,0,0,.3)'}}>
                <Container >
                <Navbar.Brand onClick={()=>navigate('/dashboard')} className='text-white fw-bold'style={{cursor:'pointer'}} >Admin Panal</Navbar.Brand>
                <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas 
                    style={{backgroundColor:'rgba(0,0,0,.3)',color:'#ffffff'}}
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                <Offcanvas.Header closeButton style={{}}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/dashboard/products')}>Products</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/dashboard/users')}>Users</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/dashboard/orders')}>Orders</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/dashboard/messages')}>Messages</Nav.Link>
                    </Nav>
                    <OverlayTrigger
                        placement={'bottom'}
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                <strong>Logout</strong>
                            </Tooltip>
                            }
                            >
                            <Button variant='' className='btn-delete ms-lg-5 mb-2' onClick={e=>{navigate('/login'); logoutAdmin();dispatch({type: LoginAdminType,pyload:null})}} ><i className="fa-solid fa-right-from-bracket"></i></Button>
                    </OverlayTrigger>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        </>
    );
    }