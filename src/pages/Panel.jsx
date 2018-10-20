import styled from "styled-components";

const Panel = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.background}
  color: ${props => props.color}
`;

export default Panel;
