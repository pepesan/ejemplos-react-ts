import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Empleado} from "./Empleado";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTableBootstrap from "./bootstrap/DataTableBootstrap";
function App() {
  var empleado: Empleado = new Empleado();
  return (
    <div className="App">
        <DataTableBootstrap/>
    </div>
  );
}

export default App;
