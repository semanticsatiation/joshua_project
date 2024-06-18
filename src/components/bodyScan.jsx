import { useEffect, useRef } from 'react';



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
      threshold: [0.16, 0.50, 0.95, 1] // Add more thresholds as needed
    });

    
    // Observe the target element with the observer
    observer.observe(bodyRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section" id='body-scan'>
      <div id='body-container'>
        <img loading="lazy" ref={bodyRef} id='body' src="src/assets/images/body_scan/body.svg" alt="" />
        <object ref={headRef} id='head-animation' type="image/svg+xml" data="src/assets/images/body_scan/head_labels.svg"></object>
        <object ref={upperRef} id='upper-body-animation' type="image/svg+xml" data="src/assets/images/body_scan/upper_body_labels.svg"></object>
        <object ref={lowerRef} id='lower-body-animation' type="image/svg+xml" data="src/assets/images/body_scan/lower_body_labels.svg"></object>
        <object ref={feetRef} id='feet-animation' type="image/svg+xml" data="src/assets/images/body_scan/feet_labels.svg"></object>
      </div>
    </div>
  );
}

export default BodyScan;