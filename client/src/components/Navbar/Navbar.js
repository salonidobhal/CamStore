import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icon.svg';
import './Navbar.css'
import '../Form/form.css';
import { FormControl, NavDropdown } from 'react-bootstrap';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, Button, Form } from 'reactstrap';
export default class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render() {
        return (
            
                <Navbar dark expand="md" className="nav-color mb-3 p-3 text">
                    <div className="container px-0">

                        <NavbarBrand className="ml-0 mr-5" href="/"><img src={logo} height="50" width="50" alt='MIKON' /></NavbarBrand>
                        <Form className="row" inline>
                            <FormControl type="text" placeholder="Search" className="col-8" />
                            <Button variant="outline-success" className="mr-1 col-3" ><span className="fa fa-search fa-sm "></span></Button>
                        </Form>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto">
                                <NavDropdown title="Products">
                                    <NavDropdown.Item href="#">Camera Lenses</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Camera Bag</NavDropdown.Item>
                                    <NavDropdown.Item href="#">DSLR</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">All New Products</NavDropdown.Item>
                                </NavDropdown>
                                <NavItem>
                                    <Link className="nav-link pointer" to='#'> About Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link pointer" to='#'> Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link pointer" to='#'> Contact Us</Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to='/signIn' className="nav-link pointer" ><span className=""></span> Login</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/signUp' className="nav-link pointer"> Sign Up</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        );
    }
}

