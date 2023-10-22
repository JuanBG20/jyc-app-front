import { useEffect, useState } from "react";
import Buttons from "./buttons";

const initialState = {
  type: "Compra",
  amount: 0,
  quantity: 0,
  client_id: 0,
  product_code: 0,
};

export default function CreateMovement() {
  const [movement, setMovement] = useState(initialState);
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);

  const fetchProducts = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
      .then((res) => res.json())
      .then(({ products }) => setProducts(products));
  };

  const fetchClients = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/clients`)
      .then((res) => res.json())
      .then(({ clients }) => setClients(clients));
  };

  useEffect(() => {
    fetchProducts();
    fetchClients();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMovement({ ...movement, [name]: value });
  };

  return (
    <>
      <div className="divContainer">
        <h1>Nuevo Movimiento</h1>

        <form className="container">
          <label htmlFor="type">Tipo: </label>
          <select onChange={handleChange} name="type" id="type">
            <option value="Compra">Compra</option>
            <option value="Venta">Venta</option>
          </select>

          <label htmlFor="amount">Monto: </label>
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            id="amount"
            value={movement.amount}
          />

          <label htmlFor="quantity">Cantidad: </label>
          <input
            onChange={handleChange}
            type="number"
            name="quantity"
            id="quantity"
            value={movement.quantity}
          />

          <label htmlFor="client_id">ID del Cliente: </label>
          <select onChange={handleChange} name="client_id" id="client_id">
            {clients?.map(({ _id, id }) => (
              <option key={_id}>{id}</option>
            ))}
          </select>

          <label htmlFor="product_code">Código del Producto: </label>
          <select onChange={handleChange} name="product_code" id="product_code">
            {products?.map(({ _id, code }) => (
              <option key={_id}>{code}</option>
            ))}
          </select>

          <Buttons
            endpoint="movements"
            object={movement}
            set={setMovement}
            initialState={initialState}
          />
        </form>
      </div>
    </>
  );
}
