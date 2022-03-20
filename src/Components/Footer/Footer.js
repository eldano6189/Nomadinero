import styles from "./Footer.module.css";
import { Animation } from "../Animation/Animation";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <Animation delay={3.4}>
        <p>© 2021-{year} NOMADINERO</p>
      </Animation>
    </footer>
  );
};
