import React, { Component } from "react";
import "./Signin.less";

export default class Signin extends Component {
  render() {
    const { signin } = this.props;
    return (
      <div className="sign-in-container">
        <h1 onClick={signin}> Sign In </h1>
      </div>
    );
  }
}
