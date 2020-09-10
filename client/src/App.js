import React from 'react';
import './App.css'; 
import Example from './components/CarouselComponent/CarouselComp';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Form/SignUp';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SignIn from './components/Form/SignIn';
import UserInfo from './components/UserInfo/UserInfo'


function App() {
  return (
    <div className="body">
      
      <Navbar/>
      
      <Switch>
      <Route exact path='/' component={Example}/>
      <Route path='/signUp' component={SignUp}/>
      <Route path='/signIn' component={SignIn}/>
      <Route path='/userInfo' component={UserInfo}/>
      </Switch>
      <Footer/>
      
      
    </div>
      
  );
}

export default App;
