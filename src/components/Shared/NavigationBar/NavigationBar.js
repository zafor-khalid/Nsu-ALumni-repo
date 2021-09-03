import { Form } from 'antd';
import React from 'react';
import { FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

const NavigationBar = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => {
        return (state.auth.email);
    })

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className="text-warning mx-3" href="#" style={{ fontSize: "40px", fontWeight: "bold" }}><Link to="/home" className="text-warning">NSU Alumni</Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" >
                    <Form className="d-flex m-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className=""
                            aria-label="Search"
                            style={{ borderRadius: '0', height: '30px' }}
                        />
                        <Button variant="outline-warning" size="sm" style={{ borderRadius: '0', height: '30px' }}>Search</Button>
                    </Form>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        {
                            value.length > 0 ?
                                <h6 className="text-warning mx-5">{value.slice(0, 5)}</h6>
                                : <Link to='/signup' className="text-warning mx-5">Join Now</Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

            <div className="d-flex justify-content-center flex-wrap">
                <Button size='sm' className="btn-success m-1" style={{ borderRadius: '0px' }}>About</Button>

                <Link to='/career'><Button size='sm' className="btn-success m-1" style={{ borderRadius: '0px' }}>Career Oppurtunities</Button></Link>
                <Link to='/NewsAndPhotos'> <Button size='sm' className="btn-success m-1" style={{ borderRadius: '0px' }}>News & photos</Button></Link>
                <Link to='/stories'>   <Button size='sm' className="btn-success m-1" style={{ borderRadius: '0px' }}>ALumni stories</Button></Link>
                <Link to='/Programs'><Button size='sm' className="btn-success m-1" style={{ borderRadius: '0px' }}>Programs</Button></Link>

                <Link to='/events'><Button size='sm' className="btn-success m-1" style={{ borderRadius: '0px' }}>Events</Button></Link>

            </div>

        </>
    )
};

export default NavigationBar;