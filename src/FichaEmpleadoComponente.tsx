import React, {Component} from 'react';
import {Empleado} from "./Empleado"; // importaciones
interface IEmpleado {
    empleado: Empleado
}

class FichaEmpleadoComponente extends Component<IEmpleado, IEmpleado>{ // definimos elcomponente
    static defaultProps = {
        empleado: new Empleado()
    };
    constructor(params: IEmpleado) {
        super(params);
        let empleado =
            new Empleado(
                this.props.empleado.code,
                this.props.empleado.nombre +" Pepe");
        this.state={
            empleado: empleado
        };
        // una vez asignado no se puede modificar
        //this.state.empleado = this.state.empleado +"Algo"
    }
    render(): React.ReactElement{ // plantilla renderizable
        return (
            <div id="FichaEmpleadoComponente">
                <h2>FichaEmpleado Componente</h2>
                <h3>Nombre: {this.state.empleado.nombre}</h3>
            </div>)
    }
}
export default FichaEmpleadoComponente; // exportación del componente
