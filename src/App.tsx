import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SuperComponente from "./SuperComponente";
import PropiedadesComponente from "./PropiedadesComponente";
import EstadoComponente from "./EstadoComponente";
import EventosComponente from "./EventosComponente";
import TaskComponent from "./tasks/TaskComponent";
import FormularioBasicoComponente from "./FormularioBasicoComponente";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo de React"/>
      <MiComponente />
      <SuperComponente/>
      <PropiedadesComponente name="Pepe" email="p@p.com" age="14"/>
      <EstadoComponente/>
      <EventosComponente/>
      <TaskComponent />
      <FormularioBasicoComponente/>
    </div>
  );
}

export default App;
