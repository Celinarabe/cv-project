import React, { Component } from "react";
import Preview from "./Preview";
import Edit from "./Edit";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = event.target.title.value;
    console.log(name);
  }

  render() {
    return (
      <div>
        <Edit fname={this.state.fname} lname={this.state.lname} onChange={e => (this.handleChange(e))} />
        <Preview fname={this.state.fname} lname={this.state.lname} />
      </div>
    );
  }
}

export default App;
