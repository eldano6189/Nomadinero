import styles from "./HomePage.module.css";
import { Animation } from "../../Components/Animation/Animation";
import SplashScreen from "../../Components/Splash-screen/SplashScreen";

export const HomePage = () => {
  return (
    <div className="container">
      <SplashScreen />
      <div className={styles.vertLine}></div>
      <Animation delay={3.6}>
        <div className={styles.subHeader}>
          <h2>Official Nomadinero Partners</h2>
          <div className={styles.line}></div>
        </div>
      </Animation>
      <ul className={styles.containerLinks}>
        <Animation delay={4}>
          <a
            href="http://www.shutterstock.com/g/nomadinero"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li className={styles.link}>
              <h3>SHUTTERSTOCK</h3>
              <p>Library</p>
            </li>
          </a>
        </Animation>
        <Animation delay={6}>
          <li className={styles.dot}></li>
        </Animation>
        <Animation delay={4.4}>
          <a
            href="https://www.pond5.com/artist/nomadinero"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li className={styles.link}>
              <h3>POND5</h3>
              <p>Library</p>
            </li>
          </a>
        </Animation>
        <Animation delay={6}>
          <li className={styles.dot}></li>
        </Animation>
        <Animation delay={4.8}>
          <a
            href="https://stock.adobe.com/es/contributor/210808626/Nomadinero"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li className={styles.link}>
              <h3>ADOBESTOCK</h3>
              <p>Library</p>
            </li>
          </a>
        </Animation>
        <Animation delay={6}>
          <li className={styles.dot}></li>
        </Animation>
        <Animation delay={5.2}>
          <a
            href="https://videohive.net/user/nomadinero"
            rel="noopener noreferrer"
            target="_blank"
          >
            <li className={styles.link}>
              <h3>ENVATO</h3>
              <p>Library</p>
            </li>
          </a>
        </Animation>
      </ul>
    </div>
  );
};

export default HomePage;
