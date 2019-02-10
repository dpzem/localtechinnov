import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import GridList from "@material-ui/core/GridList";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTile from "@material-ui/core/GridListTile";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import telstraLogo from "../Assets/Pictures/Logo.png";
import Tooltip from "@material-ui/core/Tooltip";

const style = {
  background: "white",
  borderRadius: 3,
  border: 0,
  color: "black",
  height: 48,
  padding: "0 60px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)"
};

const divStyle = {
  display: "flex",
  alignItems: "center"
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
        location: "Office"
      },
      {
        name: "Ajinkya Khairnar",
        location: "Home"
      },
      {
        name: "Jacky Li",
        location: "Leave"
      },
      {
        name: "Karina Lee",
        location: "Home"
      },
      {
        name: "Emily Lok",
        location: "Home"
      },
      {
        name: "Joshua Sim",
        location: "Home"
      },
      {
        name: "Ange Leslie",
        location: "Home"
      },
      {
        name: "Tanmai Khairnar",
        location: "Home"
      },
      {
        name: "Luke Myatt",
        location: "Home"
      },
      {
        name: "Sang Mai",
        location: "Home"
      },
      {
        name: "Chris Smith",
        location: "Home"
      },
      {
        name: "Shivani",
        location: "Home"
      },
      {
        name: "Zac Perillo",
        location: "Home"
      },
      {
        name: "Khoa Tran",
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
          <h1> Where is my Team? </h1>
        </center>
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
        </div>
        <br /> <br />
        <br />
        <center>
          <GridList cellHeight={100} cols={4}>
            {filteredData.map(item => (
              <div key={item.name}>
                <div>
                  <Button label={item.name} />
                </div>
                <div />
              </div>
            ))}
          </GridList>
        </center>
      </div>
    );
  }
}

export default MeetingRoomFinder;
