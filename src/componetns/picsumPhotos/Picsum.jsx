import React from "react";
import styled from "styled-components";
import PicsumImage from "../../assets/images/picsum.png";
const Picsum = () => {
  return (
    <Wrapper id="picsum">
      <div>
        <h1>Random Photos</h1>
        <p>
          Here you can take random photos using URL, Where you can change the
          width and height using the URL
        </p>
        <h4>How it works</h4>
        <p className="aboutWork">
          https://picsum.photos/200/300 <br /> 200 its width 300 its height, the
          numbers like 200px and 300px <br />
          Every time you use this URL you will get a different image.
        </p>
        <a
          href="https://picsum.photos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          go to link
        </a>
      </div>
      <img src={PicsumImage} alt="" />
    </Wrapper>
  );
};

export default Picsum;
const Wrapper = styled.div`
  background-color: #0096c7;
  div {
    width: 50%;
    font-family: sans-serif;
    color: #fff;
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
