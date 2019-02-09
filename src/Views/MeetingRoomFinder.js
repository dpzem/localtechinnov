import React, { Component } from "react";
import Button from "../Components/Button/button";
import Input from "@material-ui/core/Input";

const style = {
  background: "white",
  borderRadius: 3,
  border: 0,
  color: "black",
  height: 48,
  padding: "0 60px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)"
};

class MeetingRoomFinder extends Component {
  state = {
    filter: "",
    data: [
      {
        name: "Neha Wadha",
        location: "Home"
      },
      {
        name: "Jolene Farrel",
        location: "Home"
      },
      {
        name: "Julia Zhang",
        location: "Home"
      },
      {
        name: "Ajinkya Khairnar",
        location: "Home"
      },
      {
        name: "Jacky Li",
        location: "Home"
      },
      {
        name: "Karina Lee",
        location: "Home"
      },
      {
        name: "Emily Lok",
        location: "Home"
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div>
        <h1> Meeting Room Finder </h1>
        <div>
          <center>
            <Input
              style={style}
              disableUnderline={true}
              value={filter}
              onChange={this.handleChange}
              placeholder="Search for a Team Member"
            />
          </center>
          {filteredData.map(item => (
            <div key={item.name}>
              <div>
                <Button label={item.name} />
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MeetingRoomFinder;
