import styled from "styled-components";
import React from "react";

const StyledAboutme = styled.div`
  background: white;
  width: auto;
  height: auto;
  align-items: center;
  border-bottom: 0.9px solid black;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: #dc143c;
  }
`;

const Aboutme = () => {
  return (
    <StyledAboutme>
      <div>
        <h1>About Me</h1>
        <p>Hello my name is Moussa Diallo I currently go to NYU and I'm a senior whose majoring in business</p>
      </div>
    </StyledAboutme>
  );
};
export default Aboutme;