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
    el.style.backgroundColor = props.hovercolour;
    el.style.opacity = 0.9;
    el.style.height = "" + parseInt(props.radius) * 1.1 + "%";
    el.style.width = "" + parseInt(props.radius) * 1.1 + "%";
  };

  const onMouseOut = event => {
    const el = event.target;
    el.style.backgroundColor = props.colour;
    el.style.height = props.radius;
    el.style.width = props.radius;
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
