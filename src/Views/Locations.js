import React, { Component } from "react";
import Button from "../Components/Button/button";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
class Locations extends Component {
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
          <br />
          <h1> Where are you working today?</h1>
          <br />
          <NavLink to="/InOffice" style={{ textDecoration: "none" }}>
            <Button label="Office" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink to="/Confirm" style={{ textDecoration: "none" }}>
            <Button label="Home" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink to="/OnSite" style={{ textDecoration: "none" }}>
            <Button label="Out of office" onClick={this.toggleData} />
          </NavLink>
        </center>
      </div>
    );
  }
}

export default Locations;
