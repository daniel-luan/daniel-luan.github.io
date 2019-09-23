import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, Element } from "react-scroll";

import Home from "./components/home";
import Project from "./components/project";
import Skills from "./components/skills";

function Header() {
  return (
    <Navbar fixed="top" style={{ background: "#edf2f4" }}>
      <Navbar.Brand>Daniel Luan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            as={"Nav.Link"}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Nav.Link as="text">Home</Nav.Link>
          </Link>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Nav.Link as="text">Projects</Nav.Link>
          </Link>

          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Nav.Link as="text">Technologies</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  return (
    <div>
      <Header />

      <Element name="home">
        <Home />
      </Element>
      <div />
      <Element name="projects">
        <Project />
      </Element>
      <div style={{ marginTop: "100px" }} />
      <Element name="skill">
        <Skills />
      </Element>
      <div style={{ marginTop: "100px" }} />
    </div>
  );
}

export default App;
