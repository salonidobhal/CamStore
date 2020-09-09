import React from 'react';
import { Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { ButtonContainer } from '../../Button';
//import Form from '../form'; 



class UserSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: 'Male',
            dateOfBirth: '',
            placeOfBirth: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
            photo: '',
            //redirect: localStorage.getItem("userTokenTime"),
            touched: {
                name: false,
                dateOfBirth: false,
                placeOfBirth: false,
                email: false,
                userName: false,
                password: false,
                confirmPassword: false
            }
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.loginUser = this.loginUser.bind(this);
        // this.formRedirect = this.formRedirect.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "file" ? target.files[0] : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.photo === ''){alert("Choose a photo");}
        else{
            if (!(this.state.name === '' ||
            this.state.gender === '' ||
            this.state.dateOfBirth === '' ||
            this.state.placeOfBirth === '' ||
            this.state.email === '' ||
            this.state.password === '' ||
            this.state.userName === '' ||
            this.state.confirmPassword === '' ||
            this.state.confirmPassword !== this.state.password) &&
            (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
            
                //const formdata = new FormData()
            axios.post('/api/signUp', {
                name: this.state.name,
                sex: this.state.gender,
                dateOfBirth: this.state.dateOfBirth,
                placeOfBirth: this.state.placeOfBirth,
                email: this.state.email,
                userName: this.state.userName,
                password: this.state.password,
                photo: this.state.photo
            })
                .then(res => {
                   
                        console.log("SignUp Successful");
                })

                .catch(err => {
                    console.log(err);
                });
        }
        else {
            alert("Please enter valid details and leave no field empty");
        }
    }
       
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, dateOfBirth, placeOfBirth, email, userName, password, confirmPassword) {
        const errors = {
            name: '',
            dateOfBirth: '',
            placeOfBirth: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: ''


        };

        if (this.state.touched.name && name.length === 0) {
            errors.name = "Required";
        }

        if (this.state.touched.dateOfBirth && dateOfBirth.length === 0) {
            errors.dateOfBirth = "required";
        }

        if (this.state.touched.placeOfBirth && placeOfBirth.length === 0) {
            errors.placeOfBirth = "required";
        }

        if (this.state.touched.email && email.length === 0) {
            errors.email = "Required";
        }
        else if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = "email sould contain a @ ";
        }

        if (this.state.touched.userName && userName.length === 0) {
            errors.userName = "required";
        }

        const reg = /^[A-Za-z]\w{7,15}$/;
        if (this.state.touched.password && !reg.test(password)) {
            errors.password = "The password should be 7-16 characters long \n Must contain only characters, numeric digits underscore \n First character must be a letter"
        }

        if (this.state.touched.confirmPassword && this.state.confirmPassword !== this.state.password) {
            errors.confirmPassword = "The confirmed password does not match the created password";

        }
     
      

        return errors;
    }

    /*formRedirect() {
        this.setState({
            checked: !this.state.check
        });
        window.location.href = '#';
    }*/


    /* loginUser(event) {
         if (!(this.state.name === '' || this.state.sex === '' || this.state.dateOfBirth === '' || this.state.placeOfBirth === '' || this.state.email === '' || this.state.password === '' || this.state.userName === '' || this.state.confirmPassword === '' || this.state.confirmPassword !== this.state.password || this.state.error === true) &&
             (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
             window.location.href = '#';
         }
         else {
             alert("Enter valid details");
             event.preventDefault();
         }
     }*/

    render() {
        //if (this.state.redirect) return <Redirect to="/user/login"/>


        const errors = this.validate(this.state.name, this.state.dateOfBirth, this.state.placeOfBirth, this.state.email, this.state.userName, this.state.password, this.state.confirmPassword);
        return (
            <div className="container signup-div mt-5 mb-5 col-md-6 col-sm-6 col-lg-4 ">
                <Form id="form"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={this.handleSubmit}>
                    <div className="mb-2 mt-1 title">
                        Sign Up
                    </div>
                    <FormGroup row className=" mt-0" >
                        <Label htmlFor="name" md={4}>Name</Label>
                        <Col md={8}>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={this.state.name}
                                placeholder="Enter your name"
                                valid={errors.name === ''}
                                invalid={errors.name !== ''}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur("name")} />
                            <FormFeedback> {errors.name}</FormFeedback>
                        </Col>

                    </FormGroup>
                    <FormGroup row className=" mt-0">
                        <Label for="photo" md={4}>Upload Photo</Label>
                        <Col md={8}>
                            <Input
                                type="file"
                                name="photo"
                                id="photo"
                                accept="image/*"
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback> {errors.photo}</FormFeedback>

                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label for="sex" md={3}>Gender</Label>
                        <Col md={9}>
                            <div className="row">
                                <div className="ml-auto">

                                    <Label>
                                        <Input
                                            name="gender"
                                            type="radio"
                                            value="Male"
                                            checked={this.state.gender === "Male"}
                                            onChange={this.handleInputChange}
                                        />
Male
</Label>
                                </div>
                                <div className="ml-auto">
                                    <Label>
                                        <Input
                                            name="gender"
                                            type="radio"
                                            value="Female"
                                            checked={this.state.gender === "Female"}
                                            onChange={this.handleInputChange}
                                        />
Female
</Label>
                                </div>
                                <div className="ml-auto">
                                    <Label>
                                        <Input
                                            name="gender"
                                            type="radio"
                                            value="Other"
                                            checked={this.state.gender === "Other"}
                                            onChange={this.handleInputChange}
                                        />
Other
</Label>
                                </div>
                            </div>

                        </Col>
                    </FormGroup>

                    <FormGroup row className=" mt-0" >
                        <Label htmlFor="dateOfBirth" md={4}>Date of Birth</Label>
                        <Col md={8}>
                            <Input
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                min='1940-01-01'
                                max='2000-13-1'
                                value={this.state.dateOfBirth}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur("dateOfBirth")} />
                            <FormFeedback> {errors.dateOfBirth}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="placeOfBirth" md={4}>Place of Birth</Label>
                        <Col md={8}>
                            <Input
                                type="text"
                                name="placeOfBirth"
                                id="placeOfBirth"

                                value={this.state.placeOfBirth}
                                placeholder="Enter your Place of Birth"
                                valid={errors.placeOfBirth === ''}
                                invalid={errors.placeOfBirth !== ''}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('placeOfBirth')} />
                            <FormFeedback>{errors.placeOfBirth}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={4}>Email</Label>
                        <Col md={8}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                placeholder="Enter your Email"
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('email')} />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="username" md={4}>Create Username</Label>
                        <Col md={8}>
                            <Input
                                type="text"
                                name="userName"
                                id="userName"
                                value={this.state.userName}
                                placeholder="e.g lastname_firstname"
                                valid={errors.userName === ''}
                                invalid={errors.userName !== ''}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('userName')} />
                            <FormFeedback>{errors.userName}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" md={4}>Create Password</Label>
                        <Col md={8}>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                placeholder="Enter your password"
                                valid={errors.password === ''}
                                invalid={errors.password !== ''}
                                onBlur={this.handleBlur('password')}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.password}</FormFeedback>

                        </Col>
                    </FormGroup >
                    <FormGroup row>
                        <Label for="password" md={4}>Confirm Password</Label>
                        <Col md={8}>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={this.state.confirmPassword}
                                placeholder="Re-enter your password"
                                valid={errors.confirmPassword === ''}
                                invalid={errors.confirmPassword !== ''}
                                onBlur={this.handleBlur('confirmPassword')}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.confirmPassword}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <ButtonContainer
                            type="submit"
                        >SIGN UP</ButtonContainer>

                    </FormGroup>
                    <div className="link">
                        <Link to="#" > Already have an account? Sign In.</Link>
                    </div>


                </Form>

            </div>


        );
    }

}
export default UserSignUp;

