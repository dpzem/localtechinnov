import React, { Component } from "react";
import Button from "../Components/Button/button";

class Locations extends Component {
  render() {
    return (
      <div>
        <center>
          <h1> location </h1>
          <p1> where are you working today?</p1>
          <br />
          <br />
          <br />
          <Button label="at office" onClick={this.toggleData} />
          <Button label="from home" onClick={this.toggleData} />
          <Button label="On Site" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default Locations;
