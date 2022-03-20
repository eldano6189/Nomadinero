import { Button } from "../Buttons/Buttons";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import styles from "./Form.module.css";

export const Form = () => {
  const { menuHandle } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>Licence Application Form</h1>
        <Button onClick={menuHandle} />
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          action="/success"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="NAME*" required />
          <input type="email" name="email" placeholder="EMAIL*" required />
          <input
            type="text"
            name="licence"
            placeholder="COMMERCIAL / EDITORIAL*"
            required
          />
          <textarea name="message" placeholder="MESSAGE*" required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};
