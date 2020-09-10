import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './form.css'
import { ButtonContainer } from '../../Button';
import { FormGroup, Form, Col, Input, Label } from 'reactstrap';
import UserInfo from '../UserInfo/UserInfo'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            username: "",
            password: "",
            userData:[]
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        //this.openUserPage = this.openUserPage.bind(this);
    }

    componentWillUnmount(){
        axios.get('/api/user: username', {
            params : {username: this.state.username}/*, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Brearer'
                }
            }*/}).then(res => {
            this.setState({
                userData: res.data
            });
        });
        return(
            <div>
        <UserInfo userDetails={this.state.userData}/>
        
        </div>)
    }

    handleSubmit(event) {
        if (!(this.state.username === '' || this.state.password === '')) {
            axios.post("/api/signIn", {
                username: this.state.username,
                password: this.state.password
            })
                .then(res => {

                    console.log(this.state);
                    console.log(res);
                    window.location.href="http://localhost:3000/userInfo"

                    // window.location.href = '#';
                }).catch(err => {
                    event.preventDefault();
                    console.log(err);
                })
        }
        else {
            alert("Enter details.");
            event.preventDefault();
        }

    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }


    /* openUserPage(event) {
         if (!(this.state.userName === '' || this.state.password === '')) {
             window.location.href = 'http://localhost:3000/userPage';
         }
         else {
             alert('Enter Username/Password')
             event.preventDefault();
         }
     }*/

    render() {
        //if (this.state.redirect) return <Redirect to="/userPage" />
        return (
            <div className="container login-div mt-5 mb-5 col-md-6 col-sm-6 col-lg-4 px-5">
                <Form >
                    <div className="title"> LOGIN </div>
                    <FormGroup row>
                        <Label htmlFor="username" ><span className="fa fa-user fa-lg mt-2"></span></Label>
                        <Col>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                value={this.state.username}
                                placeholder="Your Username"
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" ><span className="fa fa-lock fa-lg mt-2"></span></Label>
                        <Col>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                placeholder="Your password"
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>

                        <ButtonContainer
                            type="submit"
                            onClick={this.handleSubmit}>LOGIN</ButtonContainer>
                    </FormGroup>
                    <div className="link">
                        <Link to="/signUp" >Do not have an account? Sign Up here.</Link>
                    </div>
                </Form>
            </div>

        );
    }
}
export default SignIn;

