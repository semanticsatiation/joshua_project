import { getCloudFrontUrl } from "../utils/imageHelper";

function Footer() {
  return (
    <>
      <footer id="contact" className="section">
        <div id="footer-container">
          <div id="social-container">
            <h2>Get In Touch</h2>
            <p>I am always eager to explore new opportunities and collaborations. Don’t hesitate to reach out!</p>
            <nav>
              <ul id="social-list">
                {/* <li><a target="_blank" href=""><img className='icon' src={getCloudFrontUrl('assets/svgs/font_awesome/instagram.svg')} /></a></li>
                <li><a target="_blank" href=""><img className='icon' src={getCloudFrontUrl('assets/svgs/font_awesome/facebook.svg')} /></a></li> */}
                <li><a target="_blank" href="https://www.linkedin.com/in/joshua-drummond-017021284/"><img className='icon' src={getCloudFrontUrl('assets/svgs/font_awesome/linkedin.svg')} /></a></li>
              </ul>
            </nav>
          </div>
          <div id="contact-container">
            <div>
              <img className="icon" src={getCloudFrontUrl("assets/svgs/font_awesome/phone.svg")} alt="" />
              <p><a target="_blank" href="tel:4847819915">484-781-9915</a></p>

              <div className="background-shadow"></div>
            </div>
            <div>
              <img className="icon" src={getCloudFrontUrl("assets/svgs/font_awesome/email.svg")} alt="" />
              <p><a target="_blank" href="mailto:ben4853@gmail.com">ben4853@gmail.com</a></p>
              <p></p>
              <div className="background-shadow"></div>
            </div>
          </div>
        </div>
      </footer>
      <p id="copyright">© 2024 All rights reserved. – Designed & Coded by Benjamin Candelario</p>
    </>
  );
}

export default Footer;