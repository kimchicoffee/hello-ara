import React from "react";
import styled, { injectGlobal, keyframes } from "styled-components";
import Message from "./Message.jsx";
import Panel from "./Panel.jsx";
import Hello from "./Hello.jsx";
import SeedSVG from "./Seed.jsx";
const isBrowser = typeof window !== "undefined";
const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;

injectGlobal`
  html, body, #___gatsby{
    height: 100%;
    width: 100%;
  }
  #___gatsby {
    > div, > div > article {
        height: 100%;
        width: 100%;  
    }
  }
`;

const spiningSeed = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Seed = styled(SeedSVG)`
  position: relative;
  width: 300px;
  height: 300px;
  top: 20%;
  animation: ${spiningSeed} infinite 4000ms linear;
`;

const Wrapper = styled.div``;

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);

    if (ScrollMagic) {
      this.controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: "onLeave"
        }
      });
    }
  }

  componentDidMount() {
    const slides = document.querySelectorAll(".panel");
    // create scene for every slide
    for (let i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
        .setPin(slides[i])
        .addIndicators() // add indicators (requires plugin)
        .addTo(this.controller);
    }
  }

  render() {
    return (
      <article>
        <Panel className="panel" background="white" color="red">
          <Seed className="seed" />
        </Panel>
        <Panel className="panel" background="white" color="black">
          <Message>TWO</Message>
        </Panel>
        <Panel className="panel" background="#38ced7" color="black">
          <Wrapper>
            <Hello />
          </Wrapper>
        </Panel>
      </article>
    );
  }
}
