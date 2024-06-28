import { useEffect, useRef, useState } from 'react';
import { scrollToMiddle } from '../utils/scrollHelper';

function Header() {
  const nameRef = useRef(null);

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
                <li><a href="#hero">About</a></li>
                <li onClick={() => scrollToMiddle("features")}>Features</li>
              </ul>
            </li>
            <li><h1 ref={nameRef} className='name-intro'>JOSHUA DRUMMOND</h1></li>
            <li>
              <ul>
                <li onClick={() => scrollToMiddle("main-content")}>Gallery</li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;