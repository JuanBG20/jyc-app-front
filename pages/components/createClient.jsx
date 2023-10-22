import { useState } from "react";
import Buttons from "./buttons";

const initialState = { name: "", phone: 0, id: 0 };

export default function CreateClient() {
  const [client, setClient] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setClient({ ...client, [name]: value });
  };

  return (
    <>
      <div className="divContainer">
        <h1>Nuevo Cliente</h1>

        <form className="container">
          <label htmlFor="name">Nombre: </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={client.name}
          />

          <label htmlFor="phone">Número de Celular: </label>
          <input
            onChange={handleChange}
            type="number"
            name="phone"
            id="phone"
            value={client.phone}
          />

          <label htmlFor="id">ID: </label>
          <input
            onChange={handleChange}
            type="number"
            name="id"
            id="id"
            value={client.id}
          />

          <Buttons
            endpoint="clients"
            object={client}
            set={setClient}
            initialState={initialState}
          />
        </form>
      </div>
    </>
  );
}
