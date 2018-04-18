import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

const { Provider, Consumer } = React.createContext("auth");

class AuthProvider extends Component {
  state = {
    loggedIn: "nope",
    logIn: () => {
      this.setState({ loggedIn: "yep" });
    },
    logOut: () => {
      this.setState({ loggedIn: "nope" });
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Consumer>
            {context => (
              <div>
                <button onClick={context.logIn}>Log In</button>
                <button onClick={context.logOut}>Log Out</button>
                <h2>Logged In: {context.loggedIn}</h2>
              </div>
            )}
          </Consumer>
        </div>
      </AuthProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
