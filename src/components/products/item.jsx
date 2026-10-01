import { Link } from "react-router-dom";
import styles from "./item.module.css";

function Item({ producto }) {
  return (
    <div className={styles.productCard}>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>

      <Link to={`/detalle/${producto.id}`} className={styles.detailButton}>
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
