import React from 'react';
import Header from './componetns/header/header';
import ColorGeneration from './componetns/colorGeneration/ColorGeneration';
import FaviIcon from './componetns/favIcon/FavIcon';
import MakeText from './componetns/makeText/MakeText';
import Picsum from './componetns/picsumPhotos/Picsum';

const App = () => {
  return (
    <div>
      <Header />
      <FaviIcon/>
      <MakeText/>
      <ColorGeneration/>
      <Picsum/>

    </div>
  );
}

export default App;
