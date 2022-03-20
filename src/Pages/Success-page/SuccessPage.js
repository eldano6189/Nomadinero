import { Link } from "react-router-dom";
import { Animation } from "../../Components/Animation/Animation";
import styles from "./SuccessPage.module.css";
import SplashScreen from "../../Components/Splash-screen/SplashScreen";

export const SuccessPage = () => {
  return (
    <div className={`${styles.container} container`}>
      <SplashScreen />
      <Animation delay={3.6}>
        <h1 className={styles.header}>THANK YOU!</h1>
      </Animation>
      <Animation delay={4}>
        <p className={styles.subHeader}>
          YOUR FORM SUBMISSION HAS BEEN RECIEVED.
        </p>
      </Animation>
      <Animation delay={4.4}>
        <Link to="/" className={styles.link}>
          BACK TO OUR SITE
        </Link>
      </Animation>
    </div>
  );
};

export default SuccessPage;
