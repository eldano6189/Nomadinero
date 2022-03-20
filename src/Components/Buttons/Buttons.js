import styles from "./Buttons.module.css";

export const Button = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick}></button>;
};
