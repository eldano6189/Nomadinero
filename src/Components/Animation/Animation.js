import "./Animation.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export const Animation = ({ children, delay }) => {
  const animElement = useRef();

  useEffect(() => {
    gsap.to(animElement.current, {
      delay: delay,
      duration: 2,
      xPercent: 100,
    });
  });

  return (
    <div className="animation">
      <span ref={animElement}></span>
      {children}
    </div>
  );
};
