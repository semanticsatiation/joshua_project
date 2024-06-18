import { useEffect, useRef, useState } from 'react';

const photoCategories = {
    "tank": [1, 8],
    "boxing": [9, 18],
    "mercedes": [19, 28],
    "black suit": [28, 38]
}

function Highlights({highlight, setHighlight}) {
  const [height, setHeight] = useState(0);

  const elementRef = useRef(null);
  const highlightContainerRef = useRef(null);
  const [fade, setFade] = useState(false);

  const updateHeight = () => {
    if (elementRef.current) {
      setHeight(elementRef.current.clientWidth * 3);
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
    observer.observe(highlightContainerRef.current);

    // Update height initially
    updateHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateHeight);

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
    <div ref={highlightContainerRef} className='section' id='main-content'>
        <div id='highlights'>
            {/* 
                i need the maxHeight to be set to 3 times the width to create a portrait look
                to achieve this i multioply the width of the first container by 3.  is this the best way?
            */}
            <div ref={elementRef} onClick={() => setNewHighlight("tank")} className={`highlight-container ${highlight === "tank" ? "highlight" : ""} ${fade ? "highlight-fade-1" : ""}`} style={{maxHeight: height}}>
                <img loading="lazy" src="src/assets/images/tank_top/Joshua_J-3web_desktop_resolution.webp" alt="" />
            </div>
            {/* any image after the first one don't have their css applied right away.  there is a small delay? I used a fade in animation to hide this delay.*/}
            <div onClick={() => setNewHighlight("black suit")} className={`highlight-container ${highlight === "black suit" ? "highlight" : ""} ${fade ? "highlight-fade-2" : ""}`} style={{maxHeight: height}}>
                <img loading="lazy" src="src/assets/images/black_suit/Joshua_J-34web_desktop_resolution.webp" alt="" />
            </div>
            <div onClick={() => setNewHighlight("mercedes")} className={`highlight-container ${highlight === "mercedes" ? "highlight" : ""} ${fade ? "highlight-fade-3" : ""}`} style={{maxHeight: height}}>
                <img loading="lazy" src="src/assets/images/mercedes/Joshua_J-26web_desktop_resolution.webp" alt="" />
            </div>
            <div onClick={() => setNewHighlight("boxing")} className={`highlight-container ${highlight === "boxing" ? "highlight" : ""} ${fade ? "highlight-fade-4" : ""}`} style={{maxHeight: height}}>
                <img loading="lazy" src="src/assets/images/boxing/Joshua_J-12web_desktop_resolution.webp" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Highlights;