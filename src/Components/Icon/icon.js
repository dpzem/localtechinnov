import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    display: "left",
    justifyContent: "left",
    alignItems: "left"
  },
  icon: {
    margin: theme.spacing.unit * 1
  },
  iconHover: {
    margin: theme.spacing.unit * 1,
    "&:hover": {
      color: red[800]
    }
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HomeIcon
        color="blue"
        className={classes.icon}
        style={{ fontSize: 80, float: "left" }}
      />
    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SvgIcons);
