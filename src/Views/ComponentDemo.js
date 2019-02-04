import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Form from the package 'informed'
import { Form, Text } from "informed";

class ComponentDemo extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      redirect: false
    });
  }

  handleClick = () => {
    this.setState({
      redirect: true
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <div>
        <MuiThemeProvider>
          <div style={style}>
            <h1> Use this page to demo components: </h1>
            <h2> A form example</h2>
            <TextField
              hintText="Enter Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => {
                // setUsername(newValue);
              }}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => {
                // setPassword(newValue);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  this.handleClick();
                }
              }}
            />
            <br />
            <Link to="/">
              <RaisedButton
                label="Login"
                primary={true}
                style={style}
              />
            </Link>
          </div>
        </MuiThemeProvider>
        <p> HI </p>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default ComponentDemo;
