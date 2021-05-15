import React from 'react';
import './style.css';
const nombres = ['Cristian', 'Dario', 'Hugo'];
function getNombres() {
  const elementosLista = [];
  for (let i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  return elementosLista;
}
const Nombres = () => {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
};
export default function App() {
  return (
    <div>
      <Nombres />
    </div>
  );
}
