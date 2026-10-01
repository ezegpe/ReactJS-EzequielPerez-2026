import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Inicio from "./components/home/Inicio"; //
import ItemListContainer from "./components/products/itemListContainer";
import ItemDetailContainer from "./components/details/ItemDetailContainer";
import Contacto from "./components/contact/Contacto";
import Carrito from "./components/cart/Carrito";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
