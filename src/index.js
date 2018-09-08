import React from "react";
import ReactDOM from "react-dom";

import Fab from "./components/Fab";
import { BallBounce, Ground } from "./components/Balls";
import "./styles.css";

class App extends React.Component {
  state = { gravity: null };

  incrementGravity = () => {
    if (this.state.gravity > 1.8) return;

    this.setState(({ gravity }) => ({
      gravity: (gravity || 1) + 0.1
    }));
  };

  render() {
    return (
      <React.Fragment>
        <BallBounce gravity={this.state.gravity} />
        <Ground />
        <Fab onClick={this.incrementGravity}>+</Fab>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
