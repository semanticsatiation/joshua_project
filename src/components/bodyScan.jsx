import { useEffect, useRef } from 'react';
import { getCloudFrontUrl } from '../utils/imageHelper';
import Divider from './svgs/divider.jsx';

function BodyScan() {
  const bodyRef = useRef();
  const headRef = useRef();
  const upperRef = useRef();
  const lowerRef = useRef();
  const feetRef = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.16) {
          headRef.current.style.display = "initial";
        }

        if (entry.intersectionRatio >= 0.50) {
          upperRef.current.style.display = "initial";
        }

        if (entry.intersectionRatio >= 0.95) {
          lowerRef.current.style.display = "initial";
        }

        if (entry.intersectionRatio >= 1) {
          feetRef.current.style.display = "initial";
        }
      });
    }, {
      threshold: [0.16, 0.50, 0.95, 1]
    });

    observer.observe(bodyRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section" id='features'>
      <Divider name={"body-scan-top-divider"}/>
      <div id='body-container'>
        <img loading="lazy" ref={bodyRef} id='body' src={getCloudFrontUrl("assets/svgs/body_scan/body.svg")} alt="" />
        <object ref={headRef} id='head-animation' type="image/svg+xml" data={getCloudFrontUrl("assets/svgs/body_scan/head_labels.svg")}></object>
        <object ref={upperRef} id='upper-body-animation' type="image/svg+xml" data={getCloudFrontUrl("assets/svgs/body_scan/upper_body_labels.svg")}></object>
        <object ref={lowerRef} id='lower-body-animation' type="image/svg+xml" data={getCloudFrontUrl("assets/svgs/body_scan/lower_body_labels.svg")}></object>
        <object ref={feetRef} id='feet-animation' type="image/svg+xml" data={getCloudFrontUrl("assets/svgs/body_scan/feet_labels.svg")}></object>
      </div>
      <span id="attribute">Human outline by <a target='_blank' href="https://www.freepik.com/free-vector/hand-drawn-human-body-outline-illustration_49669604.htm">Freepik</a></span>
    </div>
  );
}

export default BodyScan;