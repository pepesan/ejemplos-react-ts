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
import AppRouter from "./rutas/AppRouter";
import PeticionesWeb from "./peticionesweb/PeticionesWeb";
import ReduxAPP from "./redux/ReduxApp";
import MiContenedor from "./context/MiContenedor";
import AnyComponent from "./context2/AnyComponent";

function App() {
  var empleado: Empleado = new Empleado();
  return (
    <div className="App">
       <AnyComponent></AnyComponent>
    </div>
  );
}

export default App;
