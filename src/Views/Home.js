import React, { Component } from "react";
import Button from "../Components/Button/button";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Home Page</h1>
          <br />
          <p1> Welcome to xx, what would you like to do ?</p1>
          <br />
          <br />
          <br />
          <Button label="Log location" onClick={this.toggleData} />
          <Button label="Find Team" onClick={this.toggleData} ne />
          <Button label="Options" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default Home;
