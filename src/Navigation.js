import React from 'react';
import {Button, Form, FormControl, Navbar, Nav} from "react-bootstrap";
import About from "./pages/About.js"
import Home from "./pages/Home.js"
import Contact from "./pages/Contact.js"
import {Link,Route,BrowserRouter as Router, Switch} from "react-router-dom"

function Navigation() { 
  return (
    <div className="App">
  <Router>
    <Navbar bg="dark" variant="dark">
    
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/about">About</Link></Nav.Link>
        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
        
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar>
    <Switch>
    <Route component={Contact} path="/contact"></Route>
    <Route component={About} path="/about"></Route>
    <Route component={Home} path="/"></Route>
</Switch>

  
  </Router>
    </div>
  

  );
}

export default Navigation;






