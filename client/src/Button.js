import styled from 'styled-components';

export const ButtonContainer = styled.button`
margin: 5px 20px 5px 20px;
outline: none;
border:none;
cursor: pointer;
width:100%;
height: 60px;
border-radius: 30px;
font-size: 20px;
font-weight: 700;
font-family: 'Lato', sans-serif;
color:#fff;
align-self:center ;
text-align: center;
background-color:#0f5673;
box-shadow: 3px 3px 8px #b1b1b1,
            -3px -3px 8px #ffffff;
transition: all .75s ease-in-out;
&:hover{
    background:#0a4157;

}
&:active{
    background:#1da88a;
}`;