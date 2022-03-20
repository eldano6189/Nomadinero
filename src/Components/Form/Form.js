import { Button } from "../Buttons/Buttons";
import { useContext, useState } from "react";
import DataContext from "../../Context/DataContext";
import styles from "./Form.module.css";

export const Form = () => {
  const { menuHandle } = useContext(DataContext);
  const [submitText, setSubmitText] = useState(null);

  const onSubmit = async (event, setSubmitText) => {
    event.preventDefault();
    setSubmitText("Submitting ...");
    const formElements = [...event.currentTarget.elements];
    const isValid =
      formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

    const validFormElements = isValid ? formElements : [];

    if (validFormElements.length < 1) {
      // or some other cheeky error message
      setSubmitText("It looks like you filled out too many fields!");
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map(
          (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSubmitText("Successfully submitted!");
        })
        .catch((_) => {
          setSubmitText(
            "There was an error with your submission, please email me using the address above."
          );
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>Licence Application Form</h1>
        <Button onClick={menuHandle} />
        <form
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => onSubmit(e, setSubmitText)}
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
