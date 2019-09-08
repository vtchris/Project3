import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleOnUpdate = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <input
              onChange={this.handleOnUpdate}
              name="email"
              placeholder="Email"
              type="text"
            ></input>
          </li>
          <li>
            <input
              onChange={this.handleOnUpdate}
              name="password"
              placeholder="Password"
              type="password"
            ></input>
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Login;
