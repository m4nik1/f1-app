import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Home from "./pages/Home"
import { Route, Link } from "react-router-dom";

function App() {
  return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">F1 App</Navbar.Brand>
                <Nav className="me-auto">
                   <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Route exact path="/">
          <Home />
        </Route>
      </div>
  );
}

export default App;


