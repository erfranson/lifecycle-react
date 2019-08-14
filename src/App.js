import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  //we add props incase we want to access props in our constructor
  constructor(props) {
    super(props);
    
    this.state = {
      meaningOfLife: 47 + this.props.increment
    }

    this.props = props
  }
  
  handleClick = () =>{
    // bad practice to use this.state to update state calculations in a big applications
    // this.setState({meaningOfLife: this.state.meaningOfLife + this.props.increment}, () => console.log(this.state.meaningOfLife))
    // instead use 
    this.setState((prevState, prevProps) => {
    return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
    },
    () => console.log(this.state.meaningOfLife))

  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.meaningOfLife}
        </p>
        <button
         onClick={this.handleClick}
        >
          Update state
        </button>
      </header>
    </div>
    );
  }
}


export default App;
