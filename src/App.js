import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({}); //usestate vacia
  const [contar, setContar] = React.useState(1); //iniciamos con un 1

  console.log("render"); // mostramos que renderiza primera vez sin el fectch la 2da llamando a la api

  function sumar() {
    // funcion que al hacer click suma
    setContar((prevContar) => prevContar + 1);
    console.log(contar);
  }
  React.useEffect(() => {
    //corremos todo esto una sola vez al principio y despues cuando cambia la string dependiente
    fetch("https://swapi.dev/api/people/" + contar) // pedimos en la api
      .then((res) => res.json()) // la respuesta la convertimos en json
      .then((data) => setStarWarsData(data)); // esos datos lo pasamos a la funcion que cambia el valor de useState
  }, [contar]); // vuelve a correr cuando cambia contar

  return (
    <div>
      <h2>La suma es {contar}</h2>
      <button onClick={sumar}>Siguiente Personaje</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
