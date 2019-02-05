import React, { Component } from "react";

import Checkbox from "../Components/Check/check";
import CheckD from "../Components/Check/checkDate";
import Dropdown from "../Components/Dropdown/dropdown";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

class Options extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 800
        }}
      >
        <center>
          <br />
          <h1> Options </h1>
          <p1> Set work from home days</p1>
          <br />
          <CheckD />
          <Dropdown />
        </center>
        <p style={{ marginLeft: "60px" }}>Set default location:</p>
        <p style={{ marginLeft: "0px" }}>
          <center>
            State <Dropdown />
            Building
            <Dropdown />
            Floor
            <Dropdown />
          </center>
        </p>
        <p style={{ marginLeft: "20px" }}>
          <Checkbox label="Show me as busy" />
          <Checkbox label="Allow reminders?" />
        </p>
        <p align="right" style={{ marginRight: "50px" }}>
          <Button label="Save Options" />
        </p>
      </div>
    );
  }
}

export default Options;
