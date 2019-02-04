import React, { Component } from "react";

import Checkbox from "../Components/Check/check";
import CheckD from "../Components/Check/checkDate";
import Dropdown from "../Components/Dropdown/dropdown";
import Button from "../Components/Button/button";

class Options extends Component {
  render() {
    return (
      <div>
        <center>
          <h1> Options </h1>
          <p1> Set work from home days</p1>
          <br />
          <br />
          <p align="right">
            <CheckD />
          </p>
          <br />
        </center>
        <Dropdown />
        <p>Set default location:</p>
        <br />
        <br />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Checkbox label="show me as busy" />
        <Checkbox label="Allow reminders?" />
        <p align="right">
          {" "}
          <Button label="Save Options" />{" "}
        </p>
      </div>
    );
  }
}

export default Options;
