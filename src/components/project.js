import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectList from "./projectList";
import ProjectDetails from "./projectDetails";

import "../style/project.css";

import { projectData as projects } from "../data/projectData";

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      display: false
    };
  }

  render() {
    return (
      <Container
        fluid
        style={{
          height: "250px",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        <div style={{ marginTop: "15%" }} />
        <Row>
          <Col md={5}>
            <h1>Projects</h1>
            <ProjectList
              setSelect={select => this.setState({ selected: select })}
              setDisplay={display => this.setState({ display: display })}
              projects={projects.filter(p => p.title)}
              selected={this.state.selected}
              display={this.state.display}
            />
          </Col>
          <Col md={7}>
            <ProjectDetails
              display={this.state.display}
              detail={projects.filter(p => p.title === this.state.selected)[0]}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Project;
