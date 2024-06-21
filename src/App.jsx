import { useEffect, useRef, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import BodyScan from './components/bodyScan';
import Hero from './components/hero';
import Highlights from './components/highlights';

function App() {
  return (
    <div id='app'>
      <Header/>
      <Hero/>
      <Highlights />
      {/* IMPORTANT: BODY ANIMATION KEEPS INDEXING IN FRONT OF MAIN-IMAGE-WRAPPER */}
      <BodyScan/>
      <Footer/>
    </div>
  );
}

export default App;