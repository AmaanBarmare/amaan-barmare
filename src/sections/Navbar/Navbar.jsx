import { Link } from "react-router-dom";
import styles from "./NavbarStyles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/experience">Work Experience</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
