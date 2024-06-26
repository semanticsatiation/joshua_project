import Header from './components/header';
import Footer from './components/footer';
import BodyScan from './components/bodyScan';
import Hero from './components/hero';
import Highlights from './components/highlights';
import SideBar from './components/sidebar';

function App() {
  return (
    <div id='app'>
      <Header/>
      <Hero/>
      {/* IMPORTANT: BODY ANIMATION KEEPS INDEXING IN FRONT OF MAIN-IMAGE-WRAPPER */}
      <Highlights />
      <BodyScan/>
      <SideBar/>
      <Footer></Footer>
    </div>
  )
}

export default App;