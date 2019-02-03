import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

import NavBar from "./Components//NavBar/navbar";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import Home from "./Views/Home";
import Login from "./Views/Login";
import MeetingRoomFinder from "./Views/MeetingRoomFinder";
import ComponentDemo from "./Views/ComponentDemo";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false
    };
  }

  toggleDrawer = open => () => {
    this.setState({
      drawerIsOpen: open
    });
  };

  render() {
    console.log("HI");
    return (
      <div>
        <CssBaseline />
        <Drawer
          open={this.state.drawerIsOpen}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <SideDrawer />
          </div>
        </Drawer>
        <NavBar
          onClick={() => {
            this.setState({ drawerIsOpen: true });
            console.log(this.state.drawerIsOpen);
          }}
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/meeting-room-finder" component={MeetingRoomFinder} />
          <Route path="/component-demo" component={ComponentDemo} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
