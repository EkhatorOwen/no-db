import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search.js'
import { Container } from 'reactstrap';




class App extends Component {


  render() {

    return (
      <Container>
      <div className="App">

      
      <Search />
    

      </div>
      </Container>
    );
  }
}

export default App;
