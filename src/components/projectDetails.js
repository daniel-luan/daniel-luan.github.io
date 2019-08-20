import React from "react";

import PropTypes from "prop-types";

import "velocity-animate";
import "velocity-animate/velocity.ui";
import { VelocityComponent } from "velocity-react";

import "../style/project.css";
export class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.display = props.display;
    this.detail = props.detail;
  }

  componentWillReceiveProps(newProp) {
    this.display = newProp.display;
    this.detail = newProp.detail;
  }

  render() {
    return (
      <VelocityComponent
        animation={
          this.display ? "transition.slideLeftIn" : "transition.slideLeftOut"
        }
      >
        <div className="details">
          <div
            className="detail-background"
            style={{
              backgroundImage: `url(${this.detail.background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          />
          <h1>{this.detail.title}</h1>
          <ul>
            {this.detail.details.map(d => (
              <li key={d}>
                <font size="4">{d}</font>
              </li>
            ))}
          </ul>
        </div>
      </VelocityComponent>
    );
  }
}

ProjectDetails.propTypes = {
  display: PropTypes.bool.isRequired,
  detail: PropTypes.exact({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    background: PropTypes.string
  })
};
export default ProjectDetails;
