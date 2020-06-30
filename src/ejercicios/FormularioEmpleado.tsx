import React, {Component} from 'react';
interface Empleado {
    codigo: number;
    nombre: string;
}
class  FormularioEmpleado extends Component<any, Empleado>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            nombre: "pepe",
            codigo: 1
        }
    }
    render(): React.ReactElement{
        return (
            <div id="FormularioLogin">
                <h2>Formulario</h2>
                <form>
                    <label >Nombre</label>
                    <input id="name_input"type="text" value={this.state.nombre}/><br/>
                    <label>{this.state.nombre}</label><br/>
                    <label>Código</label>
                    <input id="password_input" type="number" min="0" value={this.state.codigo}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default FormularioEmpleado;
