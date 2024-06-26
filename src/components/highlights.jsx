import { useEffect, useRef, useState } from 'react';
import ScrollingImageGallery from './scrollingImageGallery';
import { getCloudFrontUrl } from '../utils/imageHelper';

function Highlights() {
  const highlightImageRef = useRef(null);
  const highlightsContainerRef = useRef(null);

  const [height, setHeight] = useState(0);
  const [fade, setFade] = useState(false);
  const [highlight, setHighlight] = useState("");

  const updateHeight = () => {
    if (highlightImageRef.current) {
      setHeight(highlightImageRef.current.clientWidth * 3);
    }
  };

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.40) {
          setFade(true);
        }
      });
    }, {
      threshold: [0.40] // Add more thresholds as needed
    });

    
    // Observe the target element with the observer
    observer.observe(highlightsContainerRef.current);

    // Update height initially
    updateHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateHeight);

    setNewHighlight("");

    // Clean up the event listener
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const setNewHighlight = (target) => {
    if (target === highlight) {
        setHighlight("");
    } else {
        setHighlight(target);
    }
  }

  return (
    <div ref={highlightsContainerRef} className='section' id='main-content'>
      <div id='highlights'>
        <div id='gallery-anchor'></div>
          {/* 
              i need the maxHeight to be set to 3 times the width to create a portrait look
              to achieve this i multiply the width of the first container by 3.  is this the best way?
          */}
          <div ref={highlightImageRef} onClick={() => setNewHighlight("tank_top")} className={`highlight-container ${highlight === "tank_top" ? "highlight" : ""} ${fade ? "highlight-fade-1" : ""}`} style={{maxHeight: height}}>
              <img loading="lazy" src={getCloudFrontUrl("assets/images/highlights/Joshua_J-3web.webp")} alt="" />
          </div>
          <div onClick={() => setNewHighlight("black_suit")} className={`highlight-container ${highlight === "black_suit" ? "highlight" : ""} ${fade ? "highlight-fade-2" : ""}`} style={{maxHeight: height}}>
              <img loading="lazy" src={getCloudFrontUrl("assets/images/highlights/Joshua_J-34web.webp")} alt="" />
          </div>
          <div onClick={() => setNewHighlight("mercedes")} className={`highlight-container ${highlight === "mercedes" ? "highlight" : ""} ${fade ? "highlight-fade-3" : ""}`} style={{maxHeight: height}}>
              <img loading="lazy" src={getCloudFrontUrl("assets/images/highlights/Joshua_J-26web.webp")} alt="" />
          </div>
          <div onClick={() => setNewHighlight("boxing")} className={`highlight-container ${highlight === "boxing" ? "highlight" : ""} ${fade ? "highlight-fade-4" : ""}`} style={{maxHeight: height}}>
              <img loading="lazy" src={getCloudFrontUrl("assets/images/highlights/Joshua_J-12web.webp")} alt="" />
          </div>
      </div>
      {
        fade && <ScrollingImageGallery highlight={highlight}/>
      }
    </div>
  );
}

export default Highlights;