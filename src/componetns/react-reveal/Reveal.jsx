import React from "react";
import styled from "styled-components";
import revealIcon from "../../assets/images/revealIcon.png";
const Reveal = () => {
  return (
    <Wrapper id="react-reveal">
      <div>
        <h1>React Reveal</h1>
        <p>
          React Reveal is an animation framework, It can be used to create
          various cool reveal on scroll animations in your application
        </p>
        <a
          href="https://www.react-reveal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          go to link
        </a>
      </div>
      <img src={revealIcon} alt="" />
    </Wrapper>
  );
};

export default Reveal;
const Wrapper = styled.div`
  background-color: #2815d6;
  div {
    width: 50%;
    font-family: sans-serif;
    h1 {
      color: white;
      font-weight: 600;
      margin: 0;
    }
    a {
      color: #ffbe0b;
      &:hover {
        color: #f48c06;
      }
    }
  }
`;
