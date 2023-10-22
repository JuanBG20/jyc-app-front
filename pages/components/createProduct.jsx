import { useState } from "react";
import Buttons from "./buttons";

const initialState = { name: "", price: 0, code: 0, stock: 0 };

export default function CreateProduct() {
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({ ...product, [name]: value });
  };

  return (
    <>
      <div className="divContainer">
        <h1>Nuevo Producto</h1>

        <form className="container">
          <label htmlFor="name">Nombre: </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={product.name}
          />

          <label htmlFor="price">Precio: </label>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            id="price"
            value={product.price}
          />

          <label htmlFor="code">Código: </label>
          <input
            onChange={handleChange}
            type="number"
            name="code"
            id="code"
            value={product.code}
          />

          <label htmlFor="stock">Stock: </label>
          <input
            onChange={handleChange}
            type="number"
            name="stock"
            id="stock"
            value={product.stock}
          />

          <Buttons
            endpoint="products"
            object={product}
            set={setProduct}
            initialState={initialState}
          />
        </form>
      </div>
    </>
  );
}
