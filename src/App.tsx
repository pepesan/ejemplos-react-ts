import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiComponente from './MiComponente';
import SuperComponente from "./SuperComponente";
import PropiedadesComponente from "./PropiedadesComponente";
import EstadoComponente from "./EstadoComponente";
import EventosComponente from "./EventosComponente";
import TaskComponent from "./tasks/TaskComponent";
import FormularioBasicoComponente from "./FormularioBasicoComponente";
import HookEstadoComponente from "./HookEstadoComponente";
import FormValidationComponente from "./validation/FormValidationComponente";
import BootstrapComponente from "./validation/BootstrapComponente";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logotipo"/>
      <MiComponente />
      <SuperComponente/>
      <PropiedadesComponente name="Pepe" email="p@p.com" age="14"/>
      <EstadoComponente/>
      <EventosComponente/>
      <FormularioBasicoComponente/>
      <HookEstadoComponente/>
      <FormValidationComponente />
      <BootstrapComponente/>
      <TaskComponent />
    </div>
  );
}

export default App;
