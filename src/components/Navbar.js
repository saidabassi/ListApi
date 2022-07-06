import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
      <div>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">UserAPI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Users">Users</Nav.Link>
            <Nav.Link href="Admin">Admin</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation