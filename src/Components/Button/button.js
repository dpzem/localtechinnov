import React from "react";
import Button from "@material-ui/core/Button";

const myButton = props => {
  return (
    <div>
      <Button color="primary">{props.label}</Button>
    </div>
  );
};

export default myButton;
