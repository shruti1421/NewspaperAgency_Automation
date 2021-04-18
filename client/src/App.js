import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Alerts from './components/layout/Alerts';
import Homepage from './components/pages/Homepage';
import './App.css';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import logo from './components/layout/img.png'


if(localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () => {
  return (
    <AlertState>
    <AuthState>
    <ContactState>
    <Router>
    <Fragment>
        <div>
                <h2> 
                    <img id = "logo" src={logo} />
                    <font id="title2" class ="main">  Headline </font> <font  id="title1" class ="main"> DISTRIBUTORS</font>
                </h2>

        </div>
        <Navbar title='Contact Keeper'/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
      </Switch>
    
     <div className='container'>
       <Alerts />
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          
          <Route exact path='/register' component={Register}  />
          <Route exact path='/login' component={Login} />
        </Switch>
     </div>
    </Fragment>
    </Router>
    </ContactState>
    </AuthState>
    </AlertState>
  );
}

export default App;
