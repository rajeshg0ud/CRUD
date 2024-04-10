import React from 'react'
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/CreateStudent" className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to="/CreateStudent" className="nav-link">
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to="/StudentList" className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
        </div>
  )
}

export default Header