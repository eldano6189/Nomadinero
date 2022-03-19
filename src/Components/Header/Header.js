import styles from "./Header.module.css";

import { Facebook } from "../../Assets/SVGs/Facebook";
import { Instagram } from "../../Assets/SVGs/Instagram";
import { Twitter } from "../../Assets/SVGs/Twitter";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>NOMADINERO</h1>
      </div>
      <div className={styles.media}>
        <a
          href="https://www.facebook.com/Nomadinero"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/accounts/nomadinero/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram />
        </a>
        <a
          href="https://twitter.com/nomadinero"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
      </div>
    </header>
  );
};