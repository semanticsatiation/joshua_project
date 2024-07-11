import Header from './components/header';
import Footer from './components/footer';
import BodyScan from './components/bodyScan';
import Hero from './components/hero';
import Highlights from './components/highlights';
import SideBar from './components/sidebar';
import LogoIntro from './components/logo';
import { useEffect, useState } from 'react';

function App() {
  const [appMounted, setAppMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppMounted(false);
    }, 5000);
  }, [])

  
  return (
    <div id='app'>
      <LogoIntro/>
      <Header/>
      <Hero/>
      <BodyScan/>
      <Highlights />
      <SideBar/>
      <Footer></Footer>
    </div>
  )
}

export default App;