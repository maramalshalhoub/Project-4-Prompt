import React, {Component} from 'react';
import './App.css';
import Upload from './upload/Upload';
import axios from 'axios';
import { getToken, setToken, logout} from './services/auth';
import Login from './components/Login';
import {Container, Button, Alert} from 'reactstrap';

class App extends Component {

  state = {
    games : [],
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
    data.games = []

    this.setState(data)
  }

  registerHandler = (e) => {
    axios.post('/api/auth/',{})
    .then( response => {

    })
    .catch()
  }
 
  render(){
    const showLogin = (!this.state.isAuthenticated) ? <Login change={this.changeHandler} login={this.loginHandler} /> : null
    const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null

    return (
      <div className="App">
        <Container>
          <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
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
