import styled from "styled-components";

const Panel = styled.section`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.background}
  color: ${props => props.color}
  position: relative;
  align-items: center;
  flex-direction: column;    
`;

export default Panel;
