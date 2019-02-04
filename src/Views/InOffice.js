import React, { Component } from "react";
import Button from "../Components/Button/button";

class AtOffice extends Component {
  render() {
    return (
      <div>
        <center>
          <h1> in Office </h1>
          <br />
          <p1> select the area you are sitting in?</p1>
          <br />
          <br />
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
