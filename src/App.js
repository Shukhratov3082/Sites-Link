import React from "react";
import Header from "./componetns/header/header";
import ColorGeneration from "./componetns/colorGeneration/ColorGeneration";
import FaviIcon from "./componetns/favIcon/FavIcon";
import MakeText from "./componetns/makeText/MakeText";
import Picsum from "./componetns/picsumPhotos/Picsum";
import Reveal from "./componetns/react-reveal/Reveal";
import Toastify from "./componetns/react-toastify/Toasfiy";
import { ToastContainer } from "react-toastify";
import Radius from "./componetns/radius-gradient/BorderRadius";
import ReactIcon from "./componetns/react-icons/ReactIcon";
import Swiper from "./componetns/swiper/Swiper";
import Neumorphism from "./componetns/Neumorphism/Neumorphism";
import Home from "./componetns/Home";
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <FaviIcon />
      <ColorGeneration />
      <MakeText />
      <Picsum />
      <Radius />
      <Reveal />
      <Toastify />
      <ReactIcon />
      <Swiper />
      <Neumorphism />
      <ToastContainer />
    </>
  );
};

export default App;
