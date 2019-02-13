import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  circle: {
    position: "absolute",
    backgroundColor: "grey",
    opacity: 0.5,
    borderRadius: "50%",
    height: "50px"
  }
});

function bubble(props) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "grey",
        opacity: 0.5,
        borderRadius: "50%",
        height: "50px",
        width: "50px",
        left: "10px",
        top: "20px"
      }}
    />
  );
}

bubble.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(bubble);
