import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
          height: "100vh"
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
        <p style={{ marginLeft: "60px" }}>
          Set default location:
          <NavLink to="/SetDefaultLocation" style={{ textDecoration: "none" }}>
            <Button label="Set Default Location" />
          </NavLink>
        </p>
        <p style={{ marginLeft: "20px" }}>
          <Checkbox label="Show me as busy" />
          <Checkbox label="Allow reminders?" />
        </p>
        <p align="right" style={{ marginRight: "50px" }}>
          <NavLink to="/DefaultLocation" style={{ textDecoration: "none" }}>
            <Button label="Save Options" />
          </NavLink>
        </p>
      </div>
    );
  }
}

export default Options;
