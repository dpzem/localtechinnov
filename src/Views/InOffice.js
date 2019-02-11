import React, { Component } from "react";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import telstraLogo from "../Assets/Pictures/Logo.png";
import floorplan from "../Assets/Pictures/level7.jpg";

class AtOffice extends Component {
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
          <h1> Where in the office are you?</h1>
          <br />
          <div
            style={{
              position: "relative",
              content: ".",
              display: "block",
              clear: "both",
              fontSize: 0
            }}
          >
            <img
              src={floorplan}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                height: "70%",
                width: "70%",
                border: "3px solid",
                margin: 10
              }}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default AtOffice;
