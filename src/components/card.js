import React, { useState, useEffect } from "react";

import "../style/card.css";

function limit(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

export function Card() {
  const [ax, setax] = useState(0);
  const [ay, setay] = useState(0);

  const style = {
    transform: `rotateY(${ax}deg) rotateX(${ay}deg)`,
    WebkitTransform: `rotateY(${ax}deg) rotateX(${ay}deg)`,
    MozTransform: `rotateY(${ax}deg) rotateX(${ay}deg)`
  };

  const _onMouseMove = e => {
    setax(limit(-(window.innerWidth / 2 - e.pageX) / 20, -10, 10));
    setay(limit((window.innerHeight / 2 - e.pageY) / 10, -10, 10));
  };

  useEffect(() => {
    window.addEventListener("mousemove", _onMouseMove);
  }, []);

  return (
    <div className="card" onMouseMove={_onMouseMove} style={style}>
      <div className="card-content">
        <h1 className="noselect">Daniel Luan</h1>
        <p className="sub noselect">
          Computer Science Student at the University of Waterloo
        </p>
        <p className="noselect">
          <a
            className="button"
            href="https://github.com/daniel-luan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg style={{ width: "50px", height: "50px" }} viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-luan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg style={{ width: "50px", height: "50px" }} viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </a>

          <a href="mailto:dluan@edu.uwaterloo.ca" target="_top">
            <svg style={{ width: "50px", height: "50px" }} viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
              />
            </svg>
          </a>

          <a
            href="https://drive.google.com/open?id=1GSoXOo5nR36jG0LxziODVO95bkjc9enK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg style={{ width: "50px", height: "50px" }} viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"
              />
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
