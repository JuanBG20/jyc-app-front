import CreateClient from "./components/createClient";
import CreateProduct from "./components/createProduct";
import CreateMovement from "./components/createMovement";
import ListProducts from "./components/listProducts";

export default function Home() {
  return (
    <>
      {/* <CreateClient /> */}
      <CreateProduct />
      {/* <CreateMovement /> */}
      <ListProducts />
    </>
  );
}
