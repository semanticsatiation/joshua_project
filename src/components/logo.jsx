import { getCloudFrontUrl } from '../utils/imageHelper';

function LogoIntro() {
  return (
    <div id='logo-intro'>
        <object id='logo' type="image/svg+xml" data={"public/images/logo.svg"}></object>
    </div>
  );
}

export default LogoIntro;