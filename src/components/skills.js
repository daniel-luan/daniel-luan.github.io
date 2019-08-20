import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Fade from "react-reveal/Fade";

import { skillsData } from "../data/skillsData";

Object.defineProperty(Array.prototype, "chunk", {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
});

export function Skills() {
  const [selected, setSelected] = useState(null);

  let selectStyle = {
    transform: "scale(1.1)"
  };

  return (
    <Container fluid style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <Row>
        <h2>Languages and Frameworks</h2>
      </Row>
      <Fade right cascade>
        <div>
          {skillsData.chunk(6).map(row => (
            <Row>
              {row.map(col => (
                <Col
                  style={col.name === selected ? selectStyle : {}}
                  key={col.name}
                  onMouseEnter={() => setSelected(col.name)}
                  onMouseLeave={() => setSelected(null)}
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id={`tooltip-right`}>{col.name}</Tooltip>}
                  >
                    <img
                      style={{
                        marginTop: "20px",
                        width: "4vw",
                        height: "4vw",
                        objectFit: "contain"
                      }}
                      src={col.image}
                      alt={col.name}
                    />
                  </OverlayTrigger>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </Fade>
    </Container>
  );
}

export default Skills;
