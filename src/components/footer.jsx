import { getCloudFrontUrl } from "../utils/imageHelper";

function Footer() {
  return (
    <footer className='section'>
      <nav>
        <span>Body by <a target='_blank' href="https://www.freepik.com/free-vector/hand-drawn-human-body-outline-illustration_49669604.htm">Freepik</a></span>
        <ul>
          <li><a href=""><img className='icon' src={getCloudFrontUrl('assets/svgs/font_awesome/instagram.svg')} /></a></li>
          <li><a href=""><img className='icon' src={getCloudFrontUrl('assets/svgs/font_awesome/facebook.svg')} /></a></li>
          <li><a href=""><img className='icon' src={getCloudFrontUrl('assets/svgs/font_awesome/linkedin.svg')} /></a></li>
        </ul>
      </nav>
      <span>© 2024 All rights reserved. – Designed & Coded by Benjamin Candelario</span>
    </footer>
  );
}

export default Footer;