import React from 'react'
import { Input, Col, FormGroup, Label, Button} from 'reactstrap'

const Register = (props) => {
  return (
    <>
    <Col sm={3} md={4} className="mx-auto">
     <FormGroup>
          <Label for="exampleName" sm={2}>name</Label>
        <Input name="name" onChange={props.change} />
     </FormGroup>
     <FormGroup>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Input name="email" type="email" onChange={props.change} />
      </FormGroup>
      <FormGroup>
          <Label for="exampleCategory_field" sm={2}>category_field</Label>
          <Input name="category_field" type="category_field" onChange={props.change} />
      </FormGroup>
      <FormGroup>
          <Label for="exampleSkills" sm={2}>skills</Label>
          <Input name="skills" type="skills" onChange={props.change} />
      </FormGroup>
      <FormGroup>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Input name="password" type="password" onChange={props.change} />
      </FormGroup>
      <Button onClick={props.register} color="primary" size="lg" block> Register </Button>
     </Col>
    </>
  )
}

export default Register

