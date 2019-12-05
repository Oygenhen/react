import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Signup.css';

class SignUp extends Component {
  render () {
    return (
      <div className="signup_container">
        <Form className="signup_form">
          <FormGroup className="signup_input">
            <Input
              type="text"
              name="login"
              id="login"
              placeholder="Введите логин"
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
              maxLength="255"
              required
            />
          </FormGroup>

          <FormGroup className="signup_input">
            <Input
              type="password"
              name="confirmationPassword"
              id="confirmationPassword"
              placeholder="Подтвердите пароль"
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
              maxLength="255"
            />
          </FormGroup>

          <FormGroup className="signup_input">
            <Input
              type="text"
              name="secondName"
              id="surname"
              placeholder="Введите Фамилию"
              maxLength="255"
            />
          </FormGroup>

          <Button className="signup_submit">
            Регистрация
          </Button>
        </Form>
      </div>
    );
  };
}

export default SignUp;