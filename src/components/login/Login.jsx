import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { loginReq } from '../../helpers/auth';
import './Login.css';

class Login extends React.Component {
  state = {
    login: '',
    password: '',
    error: null,
  };

  onClickHandler = async (e) => {
    e.preventDefault();
    const {login, password} = this.state;

    try {
      const loginData = await loginReq({login, password});
      if (loginData.token) {
        localStorage.setItem('auth', loginData.token);
        localStorage.setItem('name', `${loginData.name || ''} ${loginData.surname || ''}`.trim());
      }
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
      <div className="container_login">
        <Form className="login_form">
          { this.state.error }
          <FormGroup className="login_input">
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
          <FormGroup className="login_input">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Введите пароль"
              onChange={this.onFieldChange}
              maxLength="255"
              required
              autoComplete="on"
            />
          </FormGroup>
          <Button
            className="login_submit"
            onClick={this.onClickHandler}
          >
            Вход
          </Button>
        </Form>
      </div>
    );
  };
}

export default Login; 