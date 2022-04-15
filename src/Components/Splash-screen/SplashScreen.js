import styles from "./SplashScreen.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { Animation } from "../Animation/Animation";

export const SplashScreen = () => {
  const splash = useRef();

  // change opacity back to 0 once backened is required again

  useEffect(() => {
    gsap.to(splash.current, {
      opacity: 1,
      delay: 3,
    });
  });

  return (
    <div ref={splash} className={styles.container}>
      <Animation delay={0.5}>
        <h1>NOMADINERO</h1>
      </Animation>
    </div>
  );
};

export default SplashScreen;
