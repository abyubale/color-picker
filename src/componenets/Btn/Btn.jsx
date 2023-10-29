import { Button } from "react-bootstrap";
import styles from "./Btn.module.css";
const Btn = ({ clickHandler }) => {
  return (
    <Button className={styles.btn} onClick={clickHandler}>
      Add Color
    </Button>
  );
};

export default Btn;
