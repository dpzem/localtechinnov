import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import telstraLogo from "../Assets/Pictures/Logo.png";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 700
        }}
      >
        <img
          src={telstraLogo}
          style={{
            height: 90,
            width: 80,
            margin: 10
          }}
        />
        <center>
          <br /> <br />
          <h1>Telstra PinPoint</h1>
          <br />
          <NavLink to="/Locations" style={{ textDecoration: "none" }}>
            <Button label="Log Location" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink to="/find" style={{ textDecoration: "none" }}>
            <Button label="Find Team" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink to="/Options" style={{ textDecoration: "none" }}>
            <Button label="Options" onClick={this.toggleData} />
          </NavLink>
        </center>
      </div>
    );
  }
}

export default Home;
