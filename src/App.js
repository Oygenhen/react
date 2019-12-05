import React from 'react';
import './App.css';
import Startpage from  './components/startpage/Startpage'
import {Switch,Route} from 'react-router-dom'
import Routes from './routes'
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';



function App() {
  return (
    <body>
      <Startpage/>
       <Switch>
      <Route exact path={Routes.Login.path} component={Login}/> 
      <Route exact path={Routes.SignUp.path} component={SignUp}/> 
      </Switch> 
    </body>
    
    

    
  );
}

export default App;
