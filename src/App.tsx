import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SuperComponente from "./SuperComponente";
import PropiedadesComponente from "./PropiedadesComponente";

function App() {
  return (
    <div className="App">
      <MiComponente />
      <SuperComponente/>
      <PropiedadesComponente name="Pepe" email="p@p.com"/>
    </div>
  );
}

export default App;
