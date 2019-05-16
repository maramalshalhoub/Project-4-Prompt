import React from 'react'
import {Label, Input, Button} from 'reactstrap'

const AddJob = (props) => {
  return (
    <div>
        <Label for="jobname" sm={2}>name</Label>
        <Input name="jobname" onChange={props.change} /><br />
        <Label for="category_field" sm={2}>category_field</Label>
        <Input name="category_field" onChange={props.change} /><br />
        <Label for="skills" sm={2}>Skills</Label>
        <Input name="skills" onChange={props.change} /><br />
        <Label for="description" sm={2}>Description</Label>
        <Input name="description" onChange={props.change} /><br />
        <b>Duration:</b><br />
        <Label for="start" sm={2}>Start Date:</Label>
        <Input name="start" onChange={props.change} type="date" />
        <Label for="end" sm={2}>End Date:</Label>
        <Input name="end" onChange={props.change} type="date" />
        <Button href="/calendar" onClick={props.add} block>Add Job</Button>
    </div>
  )
}

export default AddJob