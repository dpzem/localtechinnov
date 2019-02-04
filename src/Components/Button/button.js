import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const myButton = props => {
  return (
    <span>
      <Button color="primary">{props.label}</Button>
    </span>
  );
};

export default myButton;
