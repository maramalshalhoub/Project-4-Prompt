import React from 'react';
import { Input, Col, FormGroup, Label, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './Register';
import '../App.css'

const Login = (props) => {
  return (
    <>
    <Col sm={3} md={4} className="mx-auto">
    <br/>
    <br/>
      <FormGroup>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Input name="email" onChange={props.change} />
      </FormGroup>
      <FormGroup>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Input name="password" type="password" onChange={props.change} />
      </FormGroup>
      <Button onClick={props.login} color="primary" size="lg" block> Login </Button>
     
        <a className= "register" href="/register">Don't have an Account? Register</a>
     
     </Col>
    </>
  )
}

export default Login;