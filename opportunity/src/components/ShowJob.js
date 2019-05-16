import React, { Component } from 'react'
import {Card, CardBody, Row } from 'reactstrap'

class ShowJob extends Component  {
  render(){
    console.log(this.props.jobs);
    
  const user = this.props.jobs 
  return (
    <div className="container-fluid">
     <br/>
        <br/>
   <Row className="space" >
    { user.map((cas) => 
     <Card  id={cas._id} style={{ width: '18rem'}} >
      <CardBody >
       
        <p className="h5" >{cas.name}</p>
        <hr/>
        <p className="h6" >Job Field:{cas.category_field}</p>
        <p className="h6">Job Description:{cas.description}</p>
        <p className="h6" >Job Start Date:{cas.start}</p>
        <p className="h6" >Job End Date:{cas.end}</p>
    
      </CardBody>
      </Card>
     )}
 </Row>
 </div>
  )
}}
  export default ShowJob
