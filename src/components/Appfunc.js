import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import Edit from "./Edit";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Appfunc() {
  //adding first name state
  const [fname, setFname] = useState("Celina");

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFname(value)
  }


  return (
      <div>
        <Container>
          <h1 className="text-center">Resume Builder</h1>
          <Row>
            <Col>
              <Edit fname={fname} onChange={(e) => handleChange(e)} />
            </Col>
            <Col>
            <h1>{fname}</h1>
            {/* <Preview fname={fname} /> */}
            </Col>
          </Row>
        </Container>
      </div>
    

  )
}
