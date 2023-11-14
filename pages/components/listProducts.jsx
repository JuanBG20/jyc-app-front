import { useEffect, useState } from "react";

export default function ListProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
      .then((res) => res.json())
      .then(({ products }) => setProducts(products));
  };

  useEffect(() => fetchProducts, []);

  return (
    <>
      <div className="divListContainer">
        <h1>Productos</h1>

        <div className="listContainer">
          <ul>
            <li className="head">Nombre</li>
            {products?.map(({ _id, name }) => (
              <li key={_id}>{name}</li>
            ))}
          </ul>
          <ul>
            <li className="head">Precio</li>
            {products?.map(({ _id, price }) => (
              <li key={_id}>${price}</li>
            ))}
          </ul>
          <ul>
            <li className="head">Código</li>
            {products?.map(({ _id, code }) => (
              <li key={_id}>{code}</li>
            ))}
          </ul>
          <ul>
            <li className="head">Stock</li>
            {products?.map(({ _id, stock }) => (
              <li key={_id}>{stock}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
