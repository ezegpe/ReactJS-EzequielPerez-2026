import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetails";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/datos/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((prod) => prod.id.toString() === id);
        setProducto(encontrado);
      })
      .catch((error) => console.error("Error al cargar el detalle:", error));
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
