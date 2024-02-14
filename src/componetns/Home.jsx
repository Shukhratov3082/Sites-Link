import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/colorSite.png";
import img2 from "../assets/images/picsum.png";
import img3 from "../assets/images/maketext.png";
import img4 from "../assets/images/faviIcon.png";
import img5 from "../assets/images/neumorphism.png";
import img6 from "../assets/images/swiper.png";
const Home = () => {
  return (
    <Wrapper>
      <div className="header__content">
        <h1>Here you can find various links</h1>
        <p>
          This site is designed to explore different libraries and learn cool
          things
        </p>
      </div>
      <div className="header__images ">
        <img src={img1} alt="image" />
        <img src={img2} alt="image" />
        <img src={img3} alt="image" />
        <img src={img4} alt="image" />
        <img src={img5} alt="image" />
        <img src={img6} alt="image" />
      </div>
    </Wrapper>
  );
};

export default Home;
const Wrapper = styled.div`
  height: calc(100vh - 72px);
  .header__content {
    width: 50%;
    p {
      color: black;
    }
  }

  .header__images {
    width: 50%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(140px, auto));
    gap: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
