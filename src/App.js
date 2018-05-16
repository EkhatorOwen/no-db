import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search.js'
import { Container } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



class App extends Component {

 render() {
    return (
      <div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Movies Now Showing</NavbarBrand>
         
        </Navbar>
      </div>
      <Container>
      <div className="App">

      <br/>
      <Search />
    
      </div>
      </Container>
      </div>
    );
  }
}

export default App;
