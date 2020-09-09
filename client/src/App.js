import React from 'react';
import './App.css'; 
import Example from './components/CarouselComponent/CarouselComp';
import Navbar from './components/Navbar/Nav2';
import SignUp from './components/SignUp/SignUp';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      
      <Switch>
      <Route exact path='/' component={Example}/>
      <Route path='/signUp' component={SignUp}/>
      </Switch>
      
      
    </React.Fragment>
      
  );
}

export default App;
