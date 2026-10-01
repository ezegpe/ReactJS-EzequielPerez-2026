import { useState, useEffect } from "react";
import Item from "./item";
import styles from "./itemListContainer.module.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/datos/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Catálogo de Productos</h2>
      <div className={styles.cardsGrid}>
        {productos.map((prod) => (
          <Item key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
