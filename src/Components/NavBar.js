import React from "react";
import { Navbar, Nav , Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../CSS/NAV.css'
import ChangeLanguage from "./ChangeLanguage";
import { connect } from "react-redux";

function NavBar()
{
    return(
        <Navbar style={{backgroundColor: "#406882"}} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="nav">Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
              <Nav.Link href="/FavList">Favorite List</Nav.Link>
              {/* <Nav.Link ><ChangeLanguage /></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;