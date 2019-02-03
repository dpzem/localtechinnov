import React, { Component } from "react";

// Form from the package 'informed'
import { Form, Text } from "informted";

class ComponentDemo extends Component {
  render() {
    return (
      <div>
        <h1> Use this page to demo components: </h1>
        <h2> A form component using 'informed' </h2>
        <Form id="login-form">
          {({ formState }) => (
            <div>
              <label htmlFor="employee-number">Employee Number:</label>
              <Text field="number" id="employee-number" />
              <button type="submit">Login</button>
              <label>Values:</label>
              <code>{JSON.stringify(formState.values)}</code>
              <label>Touched:</label>
              <code>{JSON.stringify(formState.touched)}</code>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default ComponentDemo;
