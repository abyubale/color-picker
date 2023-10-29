import { Form } from "react-bootstrap";
import styles from "./Input.module.css";
// eslint-disable-next-line react/prop-types
const Input = ({ changeHandler, value, enterPressedHandler }) => {
  return (
    <Form.Control
      size="lg"
      type="text"
      value={value}
      placeholder="Enter Color Name"
      className={styles.input}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") enterPressedHandler();
      }}
    />
  );
};

export default Input;
