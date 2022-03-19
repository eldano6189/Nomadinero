import styles from "./Footer.module.css";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© 2021-{year} NOMADINERO</p>
    </footer>
  );
};
