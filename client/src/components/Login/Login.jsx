import React, { Component } from "react";
import API from "../../utils/API";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleOnUpdate = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    
    if (this.state.email && this.state.password) {
      API.authenticateUser({        
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        window.location.replace("/home");
      })
        .catch(err => console.log(err));
    }
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
            <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Login;
