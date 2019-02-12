import React, { Component } from "react";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

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

        <center>
          <br /> <br />
          <h1> Where in the office are you?</h1>
          <br />
          <Button label="Location 1" onClick={this.toggleData} />
          <Button label="Location 2" onClick={this.toggleData} />
          <Button label="Location 3" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default AtOffice;
