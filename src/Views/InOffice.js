import React, { Component } from "react";
import Button from "../Components/Button/button";
import Bubble from "../Components/Bubble/bubble";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

import telstraLogo from "../Assets/Pictures/Logo.png";
import floorplan from "../Assets/Pictures/level7.jpg";


class AtOffice extends Component {
  render() {
    console.log("test");

    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%"
        }}
      >

        <img
          src={telstraLogo}
          style={{
            height: 90,
            width: 80,
            margin: 10
          }}
          alt="floor plan"
        />

        <center>
          <h1> Where in the office are you?</h1>
          <br />

          <div
            className="imageContainer"
            style={{
              textAlign: "center",
              position: "relative",
              display: "inline-block",
              maxWidth: "50%",
              zoom: 1
            }}
          >
            <div>
              <Bubble />
              <img
                src={floorplan}
                border="3"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%"
                }}
              />
            </div>
          </div>
        </center>
        <br />
      </div>
    );
  }
}

export default AtOffice;
