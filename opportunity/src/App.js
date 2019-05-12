import React, {Component} from 'react';
import './App.css';
import Upload from './upload/Upload';
import axios from 'axios';
import { getToken, setToken, logout} from './services/auth';
import Login from './components/Login';
import Register from './components/Register';

import {Container, Button, Alert} from 'reactstrap';

class App extends Component {

  state = {
    // games : [],
    user : "",
    errorMsg : '',
    isAuthenticated : false,
    hasError : false
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
    axios.post('/api/auth/login',{ email: this.state.email, password: this.state.password})
    .then( response => {
      console.log(response.data)
      if(response.data.token){
        setToken(response.data.token)

        let data = {...this.state}
        data.user = response.data.user
        data.isAuthenticated = true
        data.hasError = false
        
        this.setState(data)

        // this.getGames()
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
    // data.games = []

    this.setState(data)
  }

  // registerHandler = (e) => {
  //   axios.post('/api/auth/',{})
  //   .then( response => {
  
  //   })
  //   .catch()
  // }
 
  registerHandler = (e) => {
    console.log(e);
    
    axios.post('http://localhost:5000/api/auth/register',

    {name: "test2", email: "test", category_field: "test", skills: "test", password: "test"}
    
    // {name: this.state.name, email: this.state.email, category_field: this.state.category_field, skills: this.state.skills, password: this.state.password}
    
    )
    .then( response => {
      console.log("line 95")
      if(response.data.token){
        setToken(response.data.token)

        let data = {...this.state}
        data.user = response.data.user
        data.isAuthenticated = true
        data.hasError = false
        
        this.setState(data)
        
      }
    })
    .catch(() => {
      console.log("line 109")
    })
  }
 
  render(){
    const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} /> : null
    const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null
    const register= (this.state.isAuthenticated)=true ?<Register register={this.registerHandler} /> : null
  
    return (
      <div className="App">
        <Container>
          <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
          {register}
          {Logout}
          {showLogin}
        </Container>

        <div className="Card">
            <Upload />
        </div>

      </div>
    );
  }
}

export default App;
