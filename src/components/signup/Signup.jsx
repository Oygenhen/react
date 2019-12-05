import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Signup.css';

class SignUp extends React.Component{
   
    render() {
      
      return (
          <body className="body">
      <div className="signup_container">
        <Form className="signup__form" >
          <FormGroup className="signup_input">
          
            <Input 
              type="text" 
              name="login" 
              id="Login" 
              placeholder="Введите логин" 
            />
          </FormGroup>
  
          <FormGroup className="signup_input">
            
            <Input 
              type="password" 
              name="password" 
              id="Password" 
              placeholder="Введите пароль" 
            
            />
          </FormGroup>
  
          <FormGroup className="signup_input">
          
            <Input 
              type="password" 
              name="confirmationPassword" 
              id="ConfirmationPassword" 
              placeholder="Подтвердите пароль" 
            />
          </FormGroup>
  
          <FormGroup className="signup_input">
         
            <Input 
              type="text" 
              name="name" 
              id="Name" 
              placeholder="Введите имя" 
            />
          </FormGroup>
  
          <FormGroup className="signup_input">
           
            <Input 
              type="text" 
              name="secondName" 
              id="Surname" 
              placeholder="Введите Фамилию" 
          
            />
          </FormGroup>
          
          <Button className="signup_submit">
            Регистрация
          </Button>
        </Form>
      </div>
      </body>
    )};
  }
  
  export default SignUp;