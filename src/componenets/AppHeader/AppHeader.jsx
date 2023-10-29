import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./AppHeader.module.css";
const AppHeader = () => {
  return (
    <Navbar data-bs-theme="dark" className={styles.header}>
      <Container>
        <Navbar.Brand href="#home">
          <h2>Color Picker</h2>
        </Navbar.Brand>
        <Nav className="me-auto"></Nav>
      </Container>
    </Navbar>
  );
};
export default AppHeader;
