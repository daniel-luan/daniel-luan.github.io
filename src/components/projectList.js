import React from "react";

import PropTypes from "prop-types";

import "velocity-animate";
import "velocity-animate/velocity.ui";

import Fade from "react-reveal/Fade";

export function ProjectList(props) {
  let setSelect = props.setSelect;
  let setDisplay = props.setDisplay;
  let selected = props.selected;
  let display = props.display;
  let projects = props.projects;

  let selectStyle = {
    transform: "scale(1.1)"
  };

  return (
    <Fade left cascade>
      <div>
        {projects.map(p => (
          <div key={p.title}>
            <h2
              key={p.title}
              style={p.title === selected && display ? selectStyle : {}}
              onMouseEnter={() => {
                setDisplay(true);
                setSelect(p.title);
              }}
              onMouseLeave={() => {
                setDisplay(false);
              }}
            >
              - {p.title}{" "}
              <a
                className="button"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  style={{ width: "30px", height: "30px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
                  />
                </svg>
              </a>
            </h2>
          </div>
        ))}
      </div>
    </Fade>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      details: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
      background: PropTypes.string
    })
  ).isRequired,
  setSelect: PropTypes.func.isRequired,
  setDisplay: PropTypes.func.isRequired,
  selected: PropTypes.string,
  display: PropTypes.bool
};

export default ProjectList;
