import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import Button from "../Components/Button/button";
import Search from "../Components/Search/search";
import Icon from "../Components/Icon/icon";

import "/src/styles.css";

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
        <center>
          <br /> <br />
          <h1>People Finder</h1>
          <br />
          <Search />
          <br />
        </center>
        <Icon />
        <NavLink to="/meeting-room-finder" style={{ textDecoration: "none" }}>
          <Button label="Alice" onClick={this.toggleData} />
        </NavLink>
        <p class="tab" />
        <NavLink to="/meeting-room-finder" style={{ textDecoration: "none" }}>
          <Icon />
          <Button label="Alice" onClick={this.toggleData} />
        </NavLink>
      </div>
    );
  }
}

export default Home;
