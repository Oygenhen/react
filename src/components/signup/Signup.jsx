import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { signUp } from '../../helpers/auth';
import './Signup.css';


class SignUp extends Component {
  state = {
    login: '',
    password: '',
    name:'',
    surname:'',
    error: null,
  };

  onClickHandler = async (e) => {
    e.preventDefault();
    const {login, password,name,surname} = this.state;

    try {
      const signUpData = await signUp({login, password,name,surname});
    } catch (error) {
      this.setState({error:error.message})
    }
  };


  onFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render () {
    return (
      <div className="signup_container">
        <Form className="signup_form">
          {this.state.error}
          <FormGroup className="signup_input">
            <Input
              type="text"
              name="login"
              id="login"
              placeholder="Введите логин"
              onChange={this.onFieldChange}
              maxLength="255"
              required
            />
          </FormGroup>

          <FormGroup className="signup_input">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Введите пароль"
              onChange={this.onFieldChange}
              maxLength="255"
              required
            />
          </FormGroup>

          <FormGroup className="signup_input">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Введите имя"
              onChange={this.onFieldChange}
              maxLength="255"
            />
          </FormGroup>

          <FormGroup className="signup_input">
            <Input
              type="text"
              name="secondName"
              id="surname"
              placeholder="Введите Фамилию"
              onChange={this.onFieldChange}
              maxLength="255"
            />
          </FormGroup>

          <Button className="signup_submit"
           onClick={this.onClickHandler}>
            Регистрация
          </Button>
        </Form>
      </div>
    );
  };
}

export default SignUp;