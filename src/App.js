import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, Element, Events } from "react-scroll";

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
          <Nav.Link as="div">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </Nav.Link>

          <Nav.Link as="div">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });
    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);
  return (
    <div>
      <Header />

      <Element name="home">
        <Home />
      </Element>
      <div style={{ paddingTop: "200px" }} />
      <Element name="skill">
        <Skills />
      </Element>
      <div style={{ paddingTop: "200px" }} />
      <Element name="projects">
        <Project />
      </Element>
      <div style={{ paddingTop: "200px" }} />
    </div>
  );
}

export default App;
