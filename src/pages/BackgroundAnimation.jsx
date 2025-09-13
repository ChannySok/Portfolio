import React, { useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";

const BackgroundAnimation = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = RINGS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x111827, // black background
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="w-screen h-screen fixed top-0 left-0 z-[-1]"
    ></div>
  );
};

export default BackgroundAnimation;
