import React, { Component } from "react";

import Checkbox from "../Components/Check/check";
import CheckD from "../Components/Check/checkDate";
import Dropdown from "../Components/Dropdown/dropdown";
import Button from "../Components/Button/button";

class Options extends Component {
  render() {
    return (
      <span>
        <center>
          <h1> Options </h1>
          <p1> Set work from home days</p1>
          <br />
          <CheckD />
          <Dropdown />
        </center>
        <p style={{ marginLeft: "20px" }}>Set default location:</p>
        <p style={{ marginLeft: "30px" }}>
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </p>
        <p style={{ marginLeft: "20px" }}>
          <Checkbox label="show me as busy" />
          <Checkbox label="Allow reminders?" />
        </p>
        <p align="right" style={{ marginRight: "50px" }}>
          <Button label="Save Options" />
        </p>
      </span>
    );
  }
}

export default Options;
