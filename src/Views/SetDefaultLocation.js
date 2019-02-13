import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Components/Dropdown/dropdown";
import DropdownB from "../Components/Dropdown/dropdownBuilding";
import DropdownF from "../Components/Dropdown/dropdownFloor";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

class SetDefaultLocation extends Component {
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
          <h1> Set Default Location </h1>
          <br />
        </center>
        <center>
          State
          <Dropdown />
          Building
          <DropdownB />
          Floor
          <DropdownF />
        </center>
        <p align="right" style={{ marginRight: "50px" }}>
          <NavLink to="/DefaultLocation" style={{ textDecoration: "none" }}>
            <Button label="Save Location" />
          </NavLink>
        </p>
      </div>
    );
  }
}

export default SetDefaultLocation;
