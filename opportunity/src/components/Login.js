import React from 'react';
import { Input, Col, FormGroup, Label, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './Register';

const Login = (props) => {
  return (
    <>
    <Col sm={3} md={4} className="mx-auto">
      <FormGroup>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Input name="email" onChange={props.change} />
      </FormGroup>
      <FormGroup>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Input name="password" type="password" onChange={props.change} />
      </FormGroup>
      <Button onClick={props.login} color="primary" size="lg" block> Login </Button>
      <Router>
        <Route path="/register" component={Register}/>
        <Link to="Register">Register</Link>
      </Router>
     </Col>
    </>
  )
}

export default Login;