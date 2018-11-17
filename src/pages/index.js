import React from "react";
import styled, { injectGlobal, keyframes } from "styled-components";
import Panel from "./Panel.jsx";
import Hello from "./Hello.jsx";
import SeedSVG from "./Seed.jsx";
import FlowerSVG from "./Flower.jsx";
import araImage from "./ara.jpg";
import araHeartBeats from "./ara-heartbeats.mp3";

injectGlobal`
  html, body, #___gatsby{
    height: 100%;
    width: 100%;
  }
  #___gatsby {
    > div, > div > article {
        height: 100%;
        width: 100%;
        position: relative;
    }
  }
`;

const spiningSeed = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Seed = styled(SeedSVG)`
  position: fixed;
  width: 250px;
  height: 250px;
  top: 50%;
  animation: ${spiningSeed} infinite 4000ms linear;
`;

const bounceFlower = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(0, 100px, 0); }
`;

const Flower = styled(FlowerSVG)`
  position: ${props => (props.sticky ? "fixed" : "relative")};
  width: 300px;
  height: 300px;
  top: 30%;
  animation: ${bounceFlower} infinite 1s alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
`;

const Wrapper = styled.div``;

const AraWrapper = styled.div`
  width: 400px;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Ara = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlowerSticky: false };
    this.setFlowerSticky = this.setFlowerSticky.bind(this);
  }

  setFlowerSticky() {
    const flower = document.getElementById("flower");
    const sticky = flower.offsetTop;
    if (window.pageYOffset >= sticky) {
      this.setState({ isFlowerSticky: true });
      document.getElementsByTagName("audio")[0].play();
    } else {
      this.setState({ isFlowerSticky: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.setFlowerSticky);
  }

  render() {
    return (
      <article>
        <Panel
          background="white"
          color="red"
          backgroundImg="http://c1.staticflickr.com/5/4073/4770902412_02451bbe46_b.jpg"
        >
          <Seed />
        </Panel>
        <Panel
          background="white"
          color="black"
          id="flower"
          backgroundImg=" //c1.staticflickr.com/5/4715/38770613995_f42c09f8c7_h.jpg"
        >
          <Flower sticky={this.state.isFlowerSticky} id="flower" />
        </Panel>
        <Panel background="#38ced7" color="white">
          <AraWrapper>
            <Ara src={araImage} />
            <audio loop>
              <source src={araHeartBeats} type="audio/mpeg" />
            </audio>
          </AraWrapper>
          <Wrapper>
            <Hello />
          </Wrapper>
        </Panel>
      </article>
    );
  }
}
