import styles from "./SplashScreen.module.css";
import { Animation } from "../Animation/Animation";

export const SplashScreen = () => {
  return (
    <div className={styles.container}>
      <Animation delay={1}>
        <h1>NOMADINERO</h1>
      </Animation>
    </div>
  );
};
