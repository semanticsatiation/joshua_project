import { useEffect, useRef, useState } from 'react';



function Header() {
  const nameRef = useRef(null);
  const [currentIcon, setCurrentIcon] = useState("");

  useEffect(() => {
    document.body.onscroll = () => {
      const name = nameRef.current;

      if (window.scrollY >= 50 && !name.classList.contains('shrink-name')) {
        name.classList.add('shrink-name');
      } else if (window.scrollY < 50 && name.classList.contains('shrink-name')) {
        name.classList.remove('shrink-name');
      }
    }
  }, []);

  return (
    <div id='header'>
        <nav>
          <ul id='header-list'>
            <li>
              <ul>
                <li onClick={() => setCurrentIcon("")}><a href="#hero">About</a></li>
                <li><a href="#gallery-anchor">Gallery</a></li>
              </ul>
            </li>
            <li><h1 ref={nameRef} className='name-intro'>JOSHUA DRUMMOND</h1></li>
            <li>
              <ul>
                <li><a href="#body-scan">Features</a></li>
                <li><a href="#social">Social</a></li>
              </ul>
            </li>
          </ul>

          {/* <ul id='header-list-mobile'>
            <li><h1 className='name-intro'>JOSHUA DRUMMOND</h1></li>
          </ul> */}
        </nav>
    </div>
  );
}

export default Header;