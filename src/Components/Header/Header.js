import styles from "./Header.module.css";
import { Animation } from "../Animation/Animation";

import { useContext } from "react";
import DataContext from "../../Context/DataContext";

import { Facebook } from "../../Assets/SVGs/Facebook";
import { Instagram } from "../../Assets/SVGs/Instagram";
import { Twitter } from "../../Assets/SVGs/Twitter";
import { Email } from "../../Assets/SVGs/Email";

export const Header = () => {
  const { menuHandle } = useContext(DataContext);

  return (
    <header className={styles.header}>
      <Animation delay={4}>
        <div className={styles.logo}>
          <h1>NOMADINERO</h1>
        </div>
      </Animation>
      <Animation delay={4.5}>
        <div className={styles.media}>
          <Email onClick={menuHandle} />

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
      </Animation>
    </header>
  );
};
