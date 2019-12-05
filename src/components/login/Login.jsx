import React from 'react';
import { Button, Form, FormGroup,  Input } from 'reactstrap';
import './Login.css';



class Login extends React.Component{
  state = {
    login: '',
    password: '',
}

onClickHandler = (e) => {
    e.preventDefault();
    this.props.auth(this.state.login, this.state.password);
}

onLoginChange = (e) => {
    this.setState({...this.state, login: e.target.value});
}

onPasswordChange = (e) => {
    this.setState({...this.state, password: e.target.value});
}
  render() {
    return (
        <body className="body">
    <div className="container_login">
        <Form>
        <FormGroup className="login_input">
          <Input type="text" name="nickname" id="NickName" placeholder="Введите логин" onChange={this.onLoginChange}/>
        </FormGroup>
        <FormGroup className="login_input">
      
          <Input type="password" name="password" id="Password" placeholder="Введите пароль" onChange={this.onPasswordChange}/>
        </FormGroup>
        
        <Button className="login_submit" onClick={this.onClickHandler}>Вход</Button>
      </Form>
    </div>
    </body>
  )};
}

export default Login; 