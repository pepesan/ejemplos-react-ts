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
import FormValidationComponente from "./bootstrap/FormValidationComponente";
import BootstrapComponente from "./bootstrap/BootstrapComponente";
import FichaEmpleadoComponente from "./FichaEmpleadoComponente";
import {Empleado} from "./Empleado";

function App() {
  var empleado: Empleado = new Empleado();
  return (
    <div className="App">
      <img src={logo} alt="Logotipo"/>
      <MiComponente />
      <SuperComponente/>
      <PropiedadesComponente name="Pepe" email="p@p.com" age="14"/>
      <EstadoComponente/>
      <FichaEmpleadoComponente empleado={empleado}/>
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
