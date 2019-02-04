import React, { Component } from "react";
import Button from "../Components/Button/button";

class OnSite extends Component {
  render() {
    return (
      <div>
        <center>
          <h1> On Site </h1>
          <p1> How long will you be onsite until </p1>
          <br />
          <br />
          <input id="my-time" placeholder="Time (hh:mm)" />
          <br />
          <Button label="Confirm" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default OnSite;
