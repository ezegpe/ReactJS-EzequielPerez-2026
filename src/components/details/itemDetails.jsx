import styles from "./ItemDetails.module.css";

function ItemDetail({ producto }) {
  if (!producto)
    return <p style={{ textAlign: "center" }}>Cargando detalle...</p>;

  return (
    <div className={styles.detailCard}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.detailImage}
      />
      <h2>{producto.nombre}</h2>
      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>
      <p>
        <strong>Descripción:</strong> {producto.descripcion}
      </p>
    </div>
  );
}

export default ItemDetail;
