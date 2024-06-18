import { useEffect, useRef, useState } from 'react';
import ScrollingImageGallery from './components/scrollingImageGallery';
import Header from './components/header';
import Footer from './components/footer';
import BodyScan from './components/bodyScan';
import Hero from './components/hero';
import Highlights from './components/highlights';

function App() {
  const [highlight, setHighlight] = useState("");

  return (
    <div id='app'>
      <Header/>
      <Hero/>
      <BodyScan/>
      <Highlights highlight={highlight} setHighlight={setHighlight}/>

      {/* <ScrollingImageGallery highlight={highlight}/> */}
      {/* <Hero/> */}
      <Footer/>
    </div>
  );
}

export default App;