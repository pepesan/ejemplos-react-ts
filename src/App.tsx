import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SuperComponente from "./SuperComponente";
import PropiedadesComponente from "./PropiedadesComponente";
import EstadoComponente from "./EstadoComponente";
import EventosComponente from "./EventosComponente";

function App() {
  return (
    <div className="App">
      <MiComponente />
      <SuperComponente/>
      <PropiedadesComponente name="Pepe" email="p@p.com" age="14"/>
      <EstadoComponente/>
      <EventosComponente/>
    </div>
  );
}

export default App;
