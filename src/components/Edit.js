import React, { Component } from "react";
import Preview from "./Preview";

export default class Edit extends Component {
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
        <form id="frm1" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fname">First Name:</label>
            <input
              onChange={this.handleChange}
              name="fname"
              // Set the react state as the input value for controlled component inputs
              value={this.state.fname}
              type="text"
              id="fname"
            ></input>
          </div>
          <label htmlFor="lname">Last Name:</label>
          <input
            onChange={this.handleChange}
            name="lname"
            // Set the react state as the input value for controlled component inputs
            value={this.state.lname}
            type="text"
            id="lname"
          ></input>
          <div>
          <button type="submit">Preview</button>
          </div>
        </form>

        <Preview fname={this.state.fname} lname={this.state.lname} />
      </div>
    );
  }
}
