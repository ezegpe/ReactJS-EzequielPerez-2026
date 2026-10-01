import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        Inicio
      </Link>
      <Link to="/productos" className={styles.link}>
        Productos
      </Link>
      <Link to="/contacto" className={styles.link}>
        Contacto
      </Link>
      <Link to="/carrito" className={styles.link}>
        Carrito
      </Link>
    </nav>
  );
}

export default Nav;
