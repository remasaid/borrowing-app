import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.less";

/*<---Pages--->*/
import Signin from "./pages/Signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  signin = () => {
    this.setState({
      isAuthenticated: true
    });
  };

  signout = () => {
    this.setState({
      isAuthenticated: false
    });
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/signin"
            component={() =>
              !isAuthenticated ? (
                <Signin signin={this.signin} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />

          <Route
            exact
            path="/dashboard"
            component={() =>
              isAuthenticated ? (
                <Dashboard signout={this.signout} />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
