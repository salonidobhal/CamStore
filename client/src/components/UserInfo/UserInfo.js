import React, { Component } from 'react';
import axios from 'axios';
//import { CardBody, Card, CardFooter, CardTitle} from 'reactstrap';
//import styled from 'styled-components';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

      
    }
   /* componentDidUpdate(){
        axios.get('/user: usernae', {
            params : {username: this.state.username}/*, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Brearer'
                }
            }}).then(res => {
            this.setState({
                userData: res.data
            });
        });*/

    
    render() {
        console.log(this.props.userDetails);

        

        return (
            <div>
                {this.props.userDetails}
            </div>
        )
    }
}

  
/*

const CardContainer = styled.div`
border-radius: 15px;
margin-top: 30px;
border: rgb(201, 186, 186) solid 1px;
cursor: pointer;
height:20%;
box-shadow: 13px 13px 20px #cbced1,
    -13px -13px 20px #ffffff;
&:hover{
    transform: scale(1.1);
    transition: all 1s ease-in-out;
    
}

`;
const CardTitle = styled.div`
border-radius: 15px 15px 0px 0px;
height: 60px;
padding: 20px;
width:100%;
text-align: center;
text-transform: capitalize;`;

const CardBody = styled.div`
text-align: center;
width:100%;
height: 100px;
padding: 20px;
background-color:#ffffff;`;

const CardFooter = styled.div`
background-color:#0f5673;
color: white;
width:100%;
border-radius:0px 0px 15px 15px ;
padding:20px;
&:hover{
    background-color:#0f5650;
    
}`;*/
