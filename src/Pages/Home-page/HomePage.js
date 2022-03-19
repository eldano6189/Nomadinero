import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className="container">
      <div className={styles.vertLine}></div>
      <div className={styles.subHeader}>
        <h2>Official Nomadinero Partners</h2>
        <div className={styles.line}></div>
      </div>
      <ul className={styles.containerLinks}>
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
        <li className={styles.dot}></li>
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
        <li className={styles.dot}></li>
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
        <li className={styles.dot}></li>
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
      </ul>
    </div>
  );
};
