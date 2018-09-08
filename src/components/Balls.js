import React from "react";
import styled, { keyframes } from "styled-components";

const hasWindow = typeof window !== "undefined";

const bounceBall = props => keyframes`
    from {
      transform: translate3d(0, 0, 0);
      box-shadow: 0 ${props.height + 10}px 100px  rgba(0, 0, 0, 0.05),
        inset 0 -15px 15px -5px rgba(0,0,0,0.2);
    }
    to   {
      transform: translate3d(0, ${props.height + 10}px, 0);
      box-shadow: 0px 15px 10px rgba(255, 0, 0, 0.1),
        inset 0 -15px 15px -5px rgba(0,0,0,0.3);
    }
  `;

class BallBounce extends React.Component {
  state = {
    height: hasWindow && window.innerHeight,
    color: "red",
    gravity: 1
  };

  computeState = () => {
    return {
      gravity: this.props.gravity ? this.props.gravity : this.state.gravity
    };
  };

  handleWindowResize = () => {
    this.setState({
      height: window.innerHeight
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    const { height: windowHeight, color } = this.state;
    const { gravity: computedGravity } = this.computeState();
    const viewport = windowHeight - 50;
    const height = Math.round(viewport * 0.9);
    const gravity = Math.round((1 / computedGravity) * 400);
    return <Ball bgColor={color} gravity={gravity} height={height} />;
  }
}

const Ball = styled.div`
  z-index:2;
  display: block; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  left:calc(50vw - 25px);
  border:1px solid rgba(0,0,0,0.3);
  box-shadow: inset 0 -15px 15px -5px rgba(0,0,0,0.2);

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "green")};
  
  animation-name: ${bounceBall};
  animation-duration: ${({ gravity }) => (gravity ? gravity : 0)}ms;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.6,0.08,0.8,.6);
  animation-iteration-count: infinite;
`;

const Ground = styled.div`
  z-index:1;
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  height: 50px;
  box-shadow: inset 0 5px 5px -5px rgba(0,0,0,0.1);
  background: linear-gradient(#8B4513,#fff)
`;

export { Ground, BallBounce };
