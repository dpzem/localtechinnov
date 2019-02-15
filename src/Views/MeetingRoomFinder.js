import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import GridList from "@material-ui/core/GridList";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTile from "@material-ui/core/GridListTile";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from 'react-grid-system';
import HomeIcon from 'react-icons/lib/fa/home';
import OfficeIcon from 'react-icons/lib/fa/building';
import OnSiteIcon from 'react-icons/lib/fa/automobile';
import LeaveIcon from 'react-icons/lib/fa/user-times';


const style = {
  background: "white",
  borderRadius: 9,
  border: 0,
  color: "black",
  height: 48,
  padding: "0 70px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)"
};
const rowstyle = {
  borderRadius: 9,
  border: "0px solid",
  color: "white",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingRight: "100px",
  paddingLeft: "100px",
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
        name: "Neha Wadhwa",
        location: "Home"
      },
      {
        name: "Jolene Farrell",
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
        location: "Office"
      },
      {
        name: "Joshua Sim",
        location: "Office"
      },
      {
        name: "Ange Leslie",
        location: "Office"
      },
      {
        name: "Tanmai Khairnar",
        location: "Office"
      },
      {
        name: "Luke Myatt",
        location: "OnSite"
      },
      {
        name: "Sang Mai",
        location: "OnSite"
      },
      {
        name: "Chris Smith",
        location: "OnSite"
      },
      {
        name: "Shivani",
        location: "Leave"
      },
      {
        name: "Zac Perillo",
        location: "Leave"
      },
      {
        name: "Khoa Tran",
        location: "Leave"
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

    const findOccurences = (array, attr) => {
      return (array.filter((obj) => (obj.location === attr))).length
    }

    const showHomeFlag = findOccurences(filteredData, 'Home')
    const showOfficeFlag = findOccurences(filteredData, 'Office')
    const showOutofOfficeFlag = findOccurences(filteredData, 'OnSite')
    const showLeaveFlag = findOccurences(filteredData, 'Leave')

    let homePanel

    if (showHomeFlag) {
      homePanel =
      (
      <div>
      <div style={{display:"flex"}}>
      <h2>Home</h2>
      <HomeIcon size={55} style={{color:"white",paddingLeft:"20px"}}/>
      </div>
        <Row style={rowstyle} >
          {filteredData.map(item => (
            <div key={item.name}>
              <div>
                {item.location === "Home" && <Button label={item.name} />}
              </div>
            </div>
          ))}
          </Row>
          </div>
        )
    } else {
      //do nothing
    }

    let officePanel
    if (showOfficeFlag) {
      officePanel =
      (
        <div>
        <div style={{display:"flex"}}>
        <h2>Office</h2>
        <OfficeIcon size={55} style={{color:"white",paddingLeft:"20px"}}/>
        </div>
        <Row style={rowstyle} >
          {filteredData.map(item => (
            <div key={item.name}>
              <div>
                {item.location === "Office" && <Button label={item.name} />}
              </div>
            </div>
          ))}
          </Row>
          </div>
        )
    } else {
      //do nothing
    }

    let outofofficePanel
    if (showOutofOfficeFlag) {
      outofofficePanel =
      (
        <div>
        <div style={{display:"flex", justifycontent: "spacebetween" }}>
        <h2>Out of office</h2>
        <OnSiteIcon size={55} style={{color:"white",paddingLeft:"20px"}}/>
        </div>
        <Row style={rowstyle} >
          {filteredData.map(item => (
            <div key={item.name}>
              <div>
                {item.location === "OnSite" && <Button label={item.name} />}
              </div>
            </div>
          ))}
          </Row>
          </div>
        )
    } else {
      //do nothing
    }
    let leavePanel
    if (showLeaveFlag) {
      leavePanel =
      (
        <div>
        <div style={{display:"flex"}}>
        <h2>Leave</h2>
        <LeaveIcon size={55} style={{color:"white",paddingLeft:"20px"}}/>
        </div>
        <Row style={rowstyle} >
          {filteredData.map(item => (
            <div key={item.name}>
              <div>
                {item.location === "OnSite" && <Button label={item.name} />}
              </div>
            </div>
          ))}
          </Row>
          </div>
        )
    } else {
      //do nothing
    }

    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          height: "150vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
      <div>
        <center>
          <br /> <br />
          <h1> Where is my Team? </h1>
        </center>
        <div>
          <center>
            <Input
              style={style}
              disableUnderline={true}
              value={filter}
              onChange={this.handleChange}
              placeholder="Search for team member"
            />
          </center>
        </div>
      <br/>
          <div>
          <center>
          <Container>
          {homePanel}
          <br/>
          {officePanel}
            <br/>
          {outofofficePanel}
            <br/>
          {leavePanel}
          </Container>
          <br/>
          </center>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetingRoomFinder;
