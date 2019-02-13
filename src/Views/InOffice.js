import React, { Component } from "react";
import Button from "../Components/Button/button";
import Bubble from "../Components/Bubble/bubble";
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
          height: "100%"
        }}
      >
        <center
          style={{
            backgroundImage: "url(" + myImage + ")",
            backgroundSize: "cover",
            height: "100vh"
          }}
        >
          <br />
          <h1> Where in the office are you?</h1>
          <div
            className="imageContainer"
            style={{
              textAlign: "center",
              position: "relative",
              display: "inline-block",
              maxWidth: "55%",
              maxHeight: "55%",
              zoom: 1
            }}
          >
            <div>
              <Bubble
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.7"
                left="28%"
                top="6.4%"
              />
              <img
                src={floorplan}
                border="3"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%"
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
