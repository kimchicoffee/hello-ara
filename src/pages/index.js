import React from "react";
import styled, { injectGlobal } from "styled-components";
import ScrollMagic from "scrollmagic";
import Message from "./Message.jsx";
import Panel from "./Panel.jsx";
import Hello from "./Hello.jsx";

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

const Wrapper = styled.div``;

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });
  }

  componentDidMount() {
    const slides = document.querySelectorAll(".panel");
    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
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
        <Panel className="panel" background="black" color="white">
          <Message>404 Not found</Message>
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
