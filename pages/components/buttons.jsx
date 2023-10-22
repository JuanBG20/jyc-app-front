export default function Buttons({ endpoint, object, set, initialState }) {
  const handleCreateClick = (e) => {
    e.preventDefault();

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    set(initialState);

    console.log(object);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    set(initialState);
  };

  return (
    <>
      <div className="buttonContainer">
        <button onClick={handleCreateClick}>Crear</button>
        <button onClick={handleCancelClick}>Cancelar</button>
      </div>
    </>
  );
}
