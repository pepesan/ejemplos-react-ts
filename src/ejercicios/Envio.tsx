import React, {Component} from 'react';

interface Datos {
    nombre_cliente?: string;
    direccion_envio?: string;
    fecha_envio?: Date;
    fecha_llegada_prevista?: Date ;
}

class  Envio extends Component<Datos>{
    static defaultProps = {
        nombre_cliente: "",
        direccion_envio: "",
        fecha_envio : new Date(),
        fecha_llegada_prevista: new Date()
    };
    render(): React.ReactElement{
        return (
            <div id="PropiedadesComponente">
                <h2>Propiedades Componente</h2>
                <h3>{this.props.nombre_cliente}</h3>
                <h3>{this.props.direccion_envio}</h3>
                <h3>{this.props.fecha_envio?.getDate()}</h3>
                <h3>{this.props.fecha_llegada_prevista?.getDate()}</h3>
            </div>
        )
    }
}

export default Envio;
