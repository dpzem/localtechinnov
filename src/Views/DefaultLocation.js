import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";

class DefaultLocation extends Component {
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
        <div align="right" style={{ marginRight: "30px" }}>
          <Button
            label="Default Location: L5 242 Exhibition Street"
            onClick={this.toggleData}
          />
        </div>
        <center>
          <br />
          <br />
          <h1>Telstra PinPoint</h1>
          <br />
          <NavLink
            to="/Locations"
            style={{
              textDecoration: "none"
            }}
          >
            <Button label="Log Location" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink
            to="/find"
            style={{
              textDecoration: "none"
            }}
          >
            <Button label="Find Team" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink
            to="/Options"
            style={{
              textDecoration: "none"
            }}
          >
            <Button label="Options" onClick={this.toggleData} />
          </NavLink>
        </center>
      </div>
    );
  }
}

export default DefaultLocation;
