import React from 'react';
import PropiedadesComponente from "./PropiedadesComponente";
import EstadoComponente from "./EstadoComponente";
import EventosComponente from "./EventosComponente";
import TaskComponent from "./tasks/TaskComponent";
function AppComponentes() {
  return (
    <div className="App">
        <PropiedadesComponente name="pepe" age="12" email="p@p.com"/>
        <EstadoComponente/>
        <EventosComponente/>
    </div>
  );
}

export default AppComponentes;
