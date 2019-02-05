import React from "react";
import { NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeskIcon from "@material-ui/icons/DesktopMac";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import HomeIcon from "@material-ui/icons/Home";

import classes from "./sidedrawer.modules.css";

const sideDrawer = () => {
  return (
    <div className={classes.list}>
      <List>
        <NavLink to="/" className={classes.link}>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/login">
          <ListItem button key="Login">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </NavLink>
        <NavLink to="/meeting-room-finder">
          <ListItem button key="Room">
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="Meeting Room Finder" />
          </ListItem>
        </NavLink>
        <NavLink to="/DataVis">
          <ListItem button key="DataVis">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="Data Visualisation" />
          </ListItem>
        </NavLink>
        <NavLink to="/inoffice">
          <ListItem button key="in office">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="In Office" />
          </ListItem>
        </NavLink>
        <NavLink to="/options">
          <ListItem button key="options">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="options" />
          </ListItem>
        </NavLink>
        <NavLink to="/onsite">
          <ListItem button key="on site">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="on site" />
          </ListItem>
        </NavLink>
        <NavLink to="/locations">
          <ListItem button key="locatios">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="locations" />
          </ListItem>
        </NavLink>
        <NavLink to="/find">
          <ListItem button key="find">
            <ListItemIcon>
              <DeskIcon />
            </ListItemIcon>
            <ListItemText primary="find" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default sideDrawer;
