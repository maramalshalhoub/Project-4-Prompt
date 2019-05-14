import React, {Component} from 'react';
import './App.css';
import Upload from './upload/Upload';
import axios from 'axios';
import { getToken, setToken, logout} from './services/auth';
import Login from './components/Login';
import Register from './components/Register';
import { Redirect, BrowserRouter as Router, Route,Link } from 'react-router-dom';
import {Container, Button, Alert} from 'reactstrap';
import Calendar from './calendar/Calendar'
import Navigation from './Navigation'
import Apply from './Apply'
import Contact from './Contact';
 
class App extends Component {

  state = {
    user : "",
    errorMsg : '',
    isRegistered: false,
    isAuthenticated : false,
    hasError : false,
    name : "",
    email : "",
    category_field : "",
    skills : "",
    resume : "",
    password : ""
  }

  changeHandler = (e) => {
    let data = {...this.state}
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  // submitHandler = (e) => {   
  //   axios.post('/api/games',{ name : this.state.gamename}, header)
  //     .then( response => {
        
  //         let data = {...this.state}
  //         data.games.push(response.data.game)

  //         this.setState(data)
  //     })
  //     .catch()
  // }

  loginHandler = (e) => {
    // console.log("ok")
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

  // registerHandler = (e) => {
  //   axios.post('/api/auth/',{})
  //   .then( response => {
  
  //   })
  //   .catch()
  // }
 
  registerHandler = (e) => {
    // console.log("state");
    // console.log(this.state);
    
    axios.post('http://localhost:5000/api/auth/register',

    {name: this.state.name, email: this.state.email, category_field: this.state.category_field, skills: this.state.skills, resume: this.state.resume, password: this.state.password}
    )
    .then( response => {
      console.log("line 95")
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
      console.log(ee)
      console.log("line 109")
    })
  }

 
//   render(){
//     //<Router><Redirect to="/upload/Upload" /></Router>
//     // console.log(this.state.isAuthenticated)
//     const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="./upload/Upload"/> )} />

//     const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null
//     const register= (this.state.isAuthenticated)=true ?<Register change={this.changeHandler} register={this.registerHandler} /> : null
  
//     return (
//       <div className="App">
//         <Container>
//           <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
//           {/* {register} */}
//           {/* {Logout} */}
//           {showLogin}
//           {/* <Login change={this.changeHandler} login={this.loginHandler} />  */}
//         </Container>
// {/* 
//         <div className="Card">
//             <Upload />
//         </div> */}

//       </div>
//     );
//   }
// }

// export default App;

render(){
  
  // const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="./upload/Upload"/> )} />

  const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null

  // const GameView = (this.state.isAuthenticated) ? <Row>
  //                                                   <Col md={6}>
  //                                                     <ShowGame games={this.state.games} />
  //                                                   </Col>

  //                                                   <Col md={6}>
  //                                                     <AddGame add={this.submitHandler} change={this.changeHandler} />
  //                                                   </Col>
                                                    
  //                                                 </Row> : null
   

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
        </ul>       
      </header>

    <Container>
      <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>

      <Route exact path="/"  render={(props => (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} {...props} /> : <Redirect to="./upload"/> )} />

        <Route exact path="/apply" component={Apply}/>
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/upload" component={Upload}/>
        <Route exact path="/register"  render={(props => (!this.state.isAuthenticated || !this.state.isRegistered) ? <Register change={this.changeHandler} register={this.registerHandler} {...props} /> : <Redirect to="/login"/> )} />

      {Logout}
      {/* {register} */}
      {/* {showLogin} */}
      
    </Container>
      {/* <div className="Card">
        <Upload />
      </div>  */}
      {/* <Calendar />
     <Apply /> */}
    <footer>
                <br/>
                <p>@2019 Enhance Success. <br/> All Rights Reserved.</p>
    </footer>
    </div>
    </Router>
  );
}
}

export default App;