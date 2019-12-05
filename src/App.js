import React from 'react';
import './App.css';
import Startpage from './components/startpage/Startpage';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import BooksPage from './components/books/BooksPage';

function App () {
  return (
    <Switch>
      <Route exact path="/" component={Startpage}/>
      <Route exact path={routes.login.path} component={Login}/>
      <Route exact path={routes.signUp.path} component={SignUp}/>
      <Route exact path={routes.books.path} render={() => {
        const token = localStorage.getItem('auth');
        if (token) {
          return <BooksPage/>
        }

        return <Redirect to='/' />
      }}/>
    </Switch>
  );
}

export default App;
