import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';

class App extends Component {

  state = {
    username: 'default'
  }

  usernameInputHandler = (event) => {
    this.setState(
      {username: event.target.value}
    )
  }

  render() {
    return (
      <div className="App">
        <Input 
          inputHandler = {this.usernameInputHandler} 
          username = {this.state.username}/>
        <Output username = {this.state.username}/>
        <Output username = {this.state.username}/>
        <Output username = {this.state.username}/>
      </div>
    );
  }
}

export default App;
