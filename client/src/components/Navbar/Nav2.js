import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icon.svg';
import styled from 'styled-components';
import './Navbar.css'
import { FormControl, NavDropdown } from 'react-bootstrap';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
export default class Navbar2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar light expand="md" className="mb-5">
                    <div className="container px-0">

                        <NavbarBrand className="ml-0 mr-5" href="/"><img src={logo} height="50" width="50" alt='MIKON' /></NavbarBrand>
                        <Form className="row" inline>
                            <FormControl type="text" placeholder="Search" className="col-8" />
                            <Button variant="outline-success" className="mr-1 col-3" ><span className="fa fa-search fa-md"></span></Button>
                        </Form>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto">
                                <NavDropdown title="Products" className="text">
                                    <NavDropdown.Item href="#">Camera Lenses</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Camera Bag</NavDropdown.Item>
                                    <NavDropdown.Item href="#">DSLR</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">All New Products</NavDropdown.Item>
                                </NavDropdown>
                                <NavItem>
                                    <Link className="nav-link text pointer" to='/aboutus'> About Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link pointer" to='/menu'> Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link pointer" to='/contactus'> Contact Us</Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link pointer" onClick={this.toggleModal}><span className=""></span> Sign In</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/signUp' className="nav-link pointer"> Sign Up</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

