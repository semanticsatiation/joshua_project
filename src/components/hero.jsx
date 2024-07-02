import { getCloudFrontUrl } from '../utils/imageHelper';
import Divider from './svgs/divider';
import Signature from './svgs/signature';

function Hero() {
  return (
    <div id='hero'>
        <div id='hero-image-container'>
          <img id='background-image' src={getCloudFrontUrl('assets/images/high_quality_images/large_images/black_suit/Joshua_J-36web.webp')}/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div id='signature-container'>
          <Signature/>
        </div>
        
        <Divider name={"hero-bottom-divider"}/>
    </div>
  );
}

export default Hero;