import React from 'react';
import Header from './componetns/header/header';
import ColorGeneration from './componetns/colorGeneration/ColorGeneration';
import FaviIcon from './componetns/favIcon/FavIcon';
import MakeText from './componetns/makeText/MakeText';
import Picsum from './componetns/picsumPhotos/Picsum';
import Reveal from './componetns/react-reveal/Reveal';
import Toastify from './componetns/react-toastify/Toasfiy';
import { ToastContainer, toast } from 'react-toastify';
import Radius from './componetns/radius-gradient/BorderRadius';
import ReactIcon from './componetns/react-icons/ReactIcon';

// import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    // <Routes>
    //   <Route path='/header' element={<Header />}/>
    //   <Route path='/favicon' element={<FaviIcon/>}/>
    //   <Route path='/color' element={<ColorGeneration />}/>
    //   <Route path='/maketext' element={<MakeText />}/>
    //   <Route path='/picsum' element={<Picsum />}/>
    // </Routes>
    <>
      <Header />
      <FaviIcon />
      <ColorGeneration />
      <MakeText />
      <Picsum />
      <Radius/>
      <Reveal/>
      <Toastify/>
      <ReactIcon/>
      <ToastContainer />

    </>
  );
}

export default App;
