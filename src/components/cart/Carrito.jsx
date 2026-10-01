import { Link } from "react-router-dom";
import styles from "./Carrito.module.css";

function Carrito() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Carrito de Compras</h2>
      <div className={styles.emptyCart}>
        <p>Tu carrito está vacío por el momento.</p>
        <Link to="/productos" className={styles.linkButton}>
          Ver Productos
        </Link>
      </div>
    </div>
  );
}

export default Carrito;
