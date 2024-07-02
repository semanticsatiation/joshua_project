import { useEffect, useRef, useState } from 'react';
import { getCloudFrontUrl } from '../utils/imageHelper';
import { scrollToMiddle } from '../utils/scrollHelper';



function SideBar() {
  const lumpRef = useRef(null);

  const [currentIcon, setCurrentIcon] = useState("");
  const [exposeSideBar, setExposeSideBar] = useState(false);

  const sideBarRef = useRef(null);


  useEffect(() => {
    const hero = document.getElementById("hero");
    const gallery = document.getElementById("highlights");
    const features = document.getElementById("features");
    const contact = document.getElementById("contact");

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
    if (!!contact) observer.observe(contact);


    document.addEventListener("click", handleClickOutside, false);

    return () => {
      if (!!hero) observer.unobserve(hero);
      if (!!gallery) observer.unobserve(gallery);
      if (!!features) observer.unobserve(features);
      if (!!contact) observer.unobserve(contact);

      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
      if (event.target.id != "menu-button" && !sideBarRef.current.contains(event.target)) {
        setExposeSideBar(false);
    }
  };

  useEffect(() => {
    const currentLump = lumpRef.current;

    switch(currentIcon) {
        case "hero":
            currentLump.style.transform = 'translateY(-7.5px) rotate(-90deg)';
            break;
        case "features":
            currentLump.style.transform = 'translateY(75px) rotate(-90deg)';
            break;
        case "highlights":
            currentLump.style.transform = 'translateY(156px) rotate(-90deg)';
            break;
        case "contact":
            currentLump.style.transform = 'translateY(237px) rotate(-90deg)';
            break;
        default:
    }
  }, [currentIcon]);

  return (
    <>
        {
            !exposeSideBar && (
                <div id='menu-button' onClick={() => setExposeSideBar(!exposeSideBar)}>
                    <img src={getCloudFrontUrl('assets/svgs/font_awesome/hamburger.svg')} />
                </div>
            )
        }
        <div ref={sideBarRef} id='side-bar' className={exposeSideBar ? `expand-sidebar` : ""}>
            <img ref={lumpRef} id='lump' src={getCloudFrontUrl("assets/svgs/font_awesome/lump.svg")} alt="" />
            <ul id='icon-list'>
                <li className={currentIcon ===  "hero" ? "current-icon" : ""}><a href="#hero"><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/about.svg")} alt="" /></a></li>
                <li onClick={() => scrollToMiddle("features")} className={currentIcon ===  "features" ? "current-icon" : ""}><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/features.svg")} alt="" /></li>
                <li onClick={() => scrollToMiddle("main-content")} className={currentIcon ===  "highlights" ? "current-icon" : ""}><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/gallery.svg")} alt="" /></li>
                <li className={currentIcon ===  "contact" ? "current-icon" : ""}><a href="#contact"><img className='icon' src={getCloudFrontUrl("assets/svgs/font_awesome/social.svg")} alt="" /></a></li>
            </ul>
        </div>
    </>
  );
}

export default SideBar;