import './App.css';
import { useState } from 'react';
import { MyComponent } from "./components/MyComponent";
import { Total } from "./components/Total";
import { Rey } from "./components/Rey";
//Clase sobre components y props.
function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178
    }, {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169
    }, {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81
    }, {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126
    }, {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141
    }, {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69
    }
  ];

  return (
    <>
      <div id='teoría'>
        <h3 >Reyes Godos:</h3>
        <MyComponent rey='Atanagildo' reses={5} vivo={true} />
        <MyComponent rey='Ataulfo' reses={4} vivo={false} />
        <MyComponent rey='Ermenegildo' vivo={false} />
        <MyComponent reses={3} vivo={true} />
        <MyComponent rey={['Rosesvinto', 4]} reses={6} />
      </div>
      <hr />

      <div id='tarea'>
        <h4>Compre su cita con un rey aquí</h4>
        <Total />
        <div className='caja_contenedor_reyes'>
          <Rey reyes={reyes} />
        </div>
      </div>

    </>
  );
}

export default App;
