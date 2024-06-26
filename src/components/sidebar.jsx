import { useEffect, useRef, useState } from 'react';
import { getCloudFrontUrl } from '../utils/imageHelper';



function SideBar() {
  const lumpRef = useRef(null);

  const [currentIcon, setCurrentIcon] = useState("");


  useEffect(() => {
    const hero = document.getElementById("hero");
    const gallery = document.getElementById("highlights");
    const features = document.getElementById("body-scan");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.70) {
                setCurrentIcon(entry.target.id);
            }
        });
    }, {
        threshold: [0.70]
    });

    if (!!hero) observer.observe(hero);
    if (!!gallery) observer.observe(gallery);
    if (!!features) observer.observe(features);

    return () => {
      if (!!hero) observer.unobserve(hero);
      if (!!gallery) observer.unobserve(gallery);
      if (!!features) observer.unobserve(features);
    };
  }, []);

  useEffect(() => {
    const currentLump = lumpRef.current;
    switch(currentIcon) {
        case "hero":
            currentLump.style.transform = 'translateY(0) rotate(-90deg)';
            break;
        case "highlights":
            currentLump.style.transform = 'translateY(102px) rotate(-90deg)';
            break;
        case "body-scan":
            currentLump.style.transform = 'translateY(204px) rotate(-90deg)';
            break;
        case "social":
            break;
        default:
    }
  }, [currentIcon]);

  return (
    <div id='side-bar'>
        <img ref={lumpRef} id='lump' src={getCloudFrontUrl("assets/svgs/font_awesome/lump.svg")} alt="" />
        <ul id='icon-list'>
            <li className={currentIcon ===  "hero" ? "current-icon" : ""}><a href="#hero"><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/about.svg")} alt="" /></a></li>
            <li className={currentIcon ===  "highlights" ? "current-icon" : ""}><a href="#gallery-anchor"><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/gallery.svg")} alt="" /></a></li>
            <li className={currentIcon ===  "body-scan" ? "current-icon" : ""}><a href="#body-scan"><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/features.svg")} alt="" /></a></li>
            <li className={currentIcon ===  "social" ? "current-icon" : ""}><a href="#social"><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/social.svg")} alt="" /></a></li>
        </ul>
    </div>
  );
}

export default SideBar;