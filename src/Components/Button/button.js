import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  bootstrapRoot: {
    boxShadow: "none",
    color: "#fff",
    textTransform: "none",
    fontSize: 20,
    padding: "6px 12px",
    border: "2px solid",
    lineHeight: 1.5,
    backgroundColor: "transparent",
    borderColor: "#fff ",
    borderRadius: "100px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
});

function CustomizedButtons(props) {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="contained"
        color="none"
        disableRipple
        style={{
          minWidth: 200,
          maxWidth: 200,
          minHeight: 70,
          maxHeight: 200
        }}
        className={classNames(classes.margin, classes.bootstrapRoot)}
      >
        {props.label}
      </Button>
    </div>
  );
}

CustomizedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedButtons);
