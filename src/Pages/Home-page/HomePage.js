import styles from "./HomePage.module.css";
import { Animation } from "../../Components/Animation/Animation";

export const HomePage = () => {
  return (
    <div className="container">
      <div className={styles.vertLine}></div>
      <Animation delay={5}>
        <div className={styles.subHeader}>
          <h2>Official Nomadinero Partners</h2>
          <div className={styles.line}></div>
        </div>
      </Animation>
      <ul className={styles.containerLinks}>
        <Animation delay={5}>
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
        <Animation delay={7}>
          <li className={styles.dot}></li>
        </Animation>
        <Animation delay={5.5}>
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
        <Animation delay={7}>
          <li className={styles.dot}></li>
        </Animation>
        <Animation delay={6}>
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
        <Animation delay={7}>
          <li className={styles.dot}></li>
        </Animation>
        <Animation delay={6.5}>
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
