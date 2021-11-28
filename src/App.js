import './App.css';
import React , {Component} from 'react';
 import {Container , Row , Button , Col, Form , FormGroup , Input } from 'reactstrap'
 import { FacebookLoginButton } from "react-social-login-buttons";
 
function App() {
  return (
    <div className="cont">
    <Container >
  <Row>
   
    <Col>
 
   <Form className="login-form">

      
      <h2>Welcome</h2>
 <FormGroup className="form-group">
      <label>Email *</label>
      <Input type="email" placeholder="Email"/> <br/>
      <label>Password *</label>
      <Input type="password" placeholder="Password"/>
      <button type="button" class="btn btn-dark" id="btn-login">Log in</button>
      <div className="text-center pt-3">
      Or
      <FacebookLoginButton onClick={() => alert("Logged in")} />
      </div>
      <div className="text-center">
          <a href="/signup">Sign up</a>
          <span className="p--2" > | </span>
          <a href="/forgotpass">Forgot Password</a>

      
      </div>
        </FormGroup>    
    </Form>
   </Col> 
   <Col>
   <img src="/bets.jpg" className="w-100 mt-5 p--3" />
   <h2  id="txt">With us you will always win !!<br/> BEJABETS.com </h2>

   </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
