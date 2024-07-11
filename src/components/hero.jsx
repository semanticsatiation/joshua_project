import { getCloudFrontUrl } from '../utils/imageHelper';
import Signature from './svgs/signature';

function Hero() {
  return (
    <div id='hero'>
        <div id='hero-image-container'>
          <img id='background-image' src={getCloudFrontUrl('assets/images/high_quality_images/large_images/black_suit/Joshua_J-36web.webp')}/>
          <p>I am currently a Senior Design Engineer at Mack Trucks and am passionate about precision and creativity in my work. I am now looking to step into the modeling field to explore new opportunities and showcase my potential. Balancing my engineering career with my aspirations in modeling, I am excited to bring a unique perspective and dedication to this new journey.</p>
        </div>
        <div id='signature-container'>
          <Signature/>
        </div>
    </div>
  );
}

export default Hero;