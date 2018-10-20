import React from "react";
import styled, { keyframes } from "styled-components";

const blinkCaret = keyframes`
{ 50% { border-color: transparent; } }
`;

const StyledHello = styled.h1`
  font: 300% Consolas, Monaco, monospace;
  border-right: 0.1rem solid black;
  animation: ${blinkCaret} 0.75s step-end infinite;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: "", quoteArray: "Hello, 아라!".split("") };
  }

  type() {
    let char = this.state.quoteArray[0];
    if (this.state.quoteArray.length > 0) {
      this.setState(prevState => ({
        quote: prevState.quote + char,
        quoteArray: prevState.quoteArray.splice(1)
      }));
    }
  }

  componentDidMount() {
    if (this.state.quoteArray.length > 0) {
      this.interval = setInterval(() => this.type(), 500);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <StyledHello> {this.state.quote}</StyledHello>;
  }
}

export default Hello;
