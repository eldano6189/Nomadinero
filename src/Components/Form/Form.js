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
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input
            type="text"
            name="licence"
            placeholder="Commercial / Editorial*"
            required
          />
          <input type="text" name="subject" placeholder="Subject*" required />
          <textarea name="message" placeholder="Message*" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
