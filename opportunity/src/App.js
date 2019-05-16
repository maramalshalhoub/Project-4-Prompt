import React, {Component} from 'react';
import './App.css';
import Upload from './upload/Upload';
import axios from 'axios';
import { getToken, setToken, logout} from './services/auth';
import Login from './components/Login';
import Register from './components/Register';
import { Redirect, BrowserRouter as Router, Route,Link } from 'react-router-dom';
import {Container, Row, Button, Col, Alert} from 'reactstrap';
import Calendar from './calendar/Calendar'
import Navigation from './Navigation'
import Apply from './Apply'
import Contact from './Contact';
import ShowJob from './components/ShowJob';
import AddJob from './components/AddJob';

let header = {
  headers :{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${getToken()}`
  }
}

class App extends Component {
  state = {
    user : "",
    errorMsg : '',
    isRegistered: false,
    isAuthenticated : false,
    hasError : false,
    editid:'',
    name : "",
    email : "",
    category_field : "",
    skills : "",
    resume : "",
    password : "",
    jobs: [] 
  }

  componentDidMount() {
    return this.getJobs()

  }

  changeHandler = (e) => {
    let data = {...this.state}
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  getJobs = () =>{
    axios.get('http://localhost:5000/api/job', header)
    .then(response => {
      console.log(response.data)
      if(response.data.jobs.length > 0){
        let data = {...this.state}
        data.jobs = response.data.jobs

        this.setState(data)
      }
    })
    .catch()
  }

  submitHandler = (e) => {   
    axios.post('http://localhost:5000/api/job',
    { name : this.state.jobname, 
      category_field : this.state.category_field,
      skills : this.state.skills,
      start : this.state.start,
      end : this.state.end,
      backgroundColor: ''
    }, header)
      .then( response => {
        console.log(response)
        alert('Job Posted Successfully')
          let data = {...this.state}
          data.jobs.push(response.data.job)
          this.setState(data)
          window.location.href = "http://localhost:3000/calendar"
      })
      .catch(err => console.log(err))
  }

  loginHandler = (e) => {
    axios.post('http://localhost:5000/api/auth/login',{ email: this.state.email, password: this.state.password})
    .then( response => {
      console.log(response.data)
      if(response.data.token){
        setToken(response.data.token)

        let data = {...this.state}
        data.user = response.data.user
        data.isAuthenticated = true
        data.hasError = false
        this.setState(data)
      }
    })
    .catch(err =>{
      let data = {...this.state}
        data.hasError = true
        this.setState(data)
    })
  }

  logout = () =>{
    logout()
    let data = {...this.state}
    data.isAuthenticated = false
    data.user = ""
    data.email = ""
    data.password = ""
    this.setState(data)
  }

  displayJobs = ()=>{
    return this.state.jobs.map(job => 
      <li key={job._id} id={job._id}>{job.name}</li>
      )
  }

 
  registerHandler = (e) => { 
    axios.post('http://localhost:5000/api/auth/register',
    {name: this.state.name, email: this.state.email, category_field: this.state.category_field, skills: this.state.skills, resume: this.state.resume, password: this.state.password}
    )
    .then( response => {
      console.log(response)
      // if(response.data.token){
        // setToken(response.data.token)

        let data = {...this.state}
        data.user = response.data.user
        data.isAuthenticated = true
        data.isRegistered = true
        data.hasError = false
        
        this.setState(data)
        window.location.href = "http://localhost:3000/login"
      // }
    })
    .catch((ee) => {
      console.log(ee);
    })

  }


render(){
  const Logout = (this.state.isAuthenticated) ? <Button className="poster" onClick={this.logout}><a href="/">Logout</a> </Button> : null
  const up = (this.state.isAuthenticated) ? <Button className="poster">Upload</Button> :null
  const post= (this.state.isAuthenticated) ?<Button className="poster">Post Job</Button>:null
  const show= (this.state.isAuthenticated) ?<Button className="show">Show Job</Button>:null
  
  const JobView = (this.state.isAuthenticated) ? <Row>
  <Col md={6}>
    <ShowJob jobs={this.state.jobs} />
  </Col>

  <Col md={6}>
    <AddJob add={this.submitHandler} change={this.changeHandler} />
  </Col>
</Row> : null

  console.log(this.state)
  return (
    <Router>
    <div>
      <header>
      <ul>
            <li><Link to="/"><img className= "logo1" src="https://i.ibb.co/0rYsZsW/logo.png" alt="logo" border="0" /></Link></li>
            <li><Link to="/apply">Apply</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <Link to="/" className="poster">{Logout}</Link>
            <Link to="/upload" className="poster" >{up}</Link>
            <Link to="/postjob" className="poster">{post}</Link>
          
        </ul>       
      </header>

    <Container>
      <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>

        <Route exact path="/"  render={(props => (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="./calendar"/> )} />
        <Route exact path="/apply" component={Apply}/>
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/upload" component={Upload}/>
        <Route exact path="/postjob" render={props => <AddJob {...props}  change={this.changeHandler} add={this.submitHandler} />} />
        <Route exact path="/register"  render={(props => (!this.state.isAuthenticated || !this.state.isRegistered) ? <Register change={this.changeHandler} register={this.registerHandler} {...props} /> : <Redirect to="/login"/> )} />
        {/* <Route exact path="/showjob"  component={ShowJob}/> */}
        <Route exact path="/showjob" render={(props) => <ShowJob {...props} jobs={this.state.jobs}  getcase={this.getJobs}   />} />

      {/* {Logout} */}
      {/* {JobView} */}
      {/* {register} */}
      {/* {showLogin} */}
      
    </Container>
      {/* <div className="Card">
        <Upload />
      </div>  */}
      {/* <Calendar />
     <Apply /> */}
    <footer>
               
                <p>@2019 Enhance Success. <br/> All Rights Reserved.</p>
    </footer>
    </div>
    </Router>
    
  );
}
}

export default App;