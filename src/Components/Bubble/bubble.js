import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
  const onMouseOver = event => {
    const el = event.target;
    el.style.backgroundColor = "orange";
  };

  const onMouseOut = event => {
    const el = event.target;
    el.style.BackgroundColor = "grey";
  };

  return (
    <NavLink to="/">
      <div
        style={{
          position: "absolute",
          backgroundColor: props.colour,
          opacity: props.opacity,
          borderRadius: "50%",
          height: props.radius,
          width: props.radius,
          left: props.left,
          top: props.top
        }}
        onMouseEnter={event => onMouseOver(event)}
        onMouseLeave={event => onMouseOut(event)}
      />
    </NavLink>
  );
}

bubble.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(bubble);
