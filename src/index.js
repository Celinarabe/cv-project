import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//import Button from "react-bootstrap/Button";
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Card className="mb-3"style={{ color: "aqua" }}>
    
      <Card.Body>
        <Card.Title>
          Card Example
        </Card.Title>
        <Card.Text>
          This is an example of a bootstrap card yo
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    <Breadcrumb>
    <Breadcrumb.Item>Test</Breadcrumb.Item>
    <Breadcrumb.Item>Test2</Breadcrumb.Item>
    <Breadcrumb.Item active>Test3</Breadcrumb.Item>
    </Breadcrumb>
    <App />
    <Button>Test Button</Button>
    <Alert variant="success">This is a button</Alert>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
