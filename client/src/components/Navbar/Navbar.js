import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icon.svg';
import styled from 'styled-components';
import './Navbar.css'
import {FormControl, NavDropdown} from 'react-bootstrap';
import {
	Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink,
	NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
export default class NavbarComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
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

	render() {
		return (
			<React.Fragment>
				< Navbar dark  className='mb-5' expand="md" >
				
					<div className="container">
						<NavbarBrand className="mr-auto" href="/"><img src={logo} width="80" height="80" alt="Mikon" height="30" width="41" /></NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar >
							<Nav navbar>
							<NavDropdown title="Products" className="text" id="basic-nav-dropdown">
									<NavDropdown.Item href="#">Camera Lenses</NavDropdown.Item>
									<NavDropdown.Item href="#">Camera Bag</NavDropdown.Item>
									<NavDropdown.Item href="#">DSLR</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#">All New Products</NavDropdown.Item>
								</NavDropdown>
								<NavItem>
									<NavLink className="nav-link text" to='#'><span className="fa fa-home fa-lg"></span> Home</NavLink>
								</NavItem>
								
								<NavItem>
									<NavLink className="nav-link text" to='#'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link text" to='#'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
								</NavItem>
							</Nav>
							<Form inline>
								<FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-success">Search</Button>
							</Form>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
								</NavItem>
							</Nav>

						</Collapse>

					</div>
				</Navbar >
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
			</React.Fragment>
		);
	}
}

const NavWrapper = styled.nav`

line-height: 20px !important;
margin-bottom: 20px;
.nav-link{

	color: white !important;
	font-size: 1.3rem;
	text-transform: capitalize  ;
	`;