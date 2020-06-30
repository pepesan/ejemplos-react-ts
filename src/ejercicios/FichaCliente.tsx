import React, {Component} from 'react';

interface Cliente {
    name?: string;
    direccion?: string;
    dni?: string;
    tlf?: number | string ;
}

class  FichaCliente extends Component<Cliente>{
    static defaultProps = {
        name: "",
        direccion: "",
        dni : "",
        tlf: ""
    };
    render(): React.ReactElement{
        return (
            <div id="PropiedadesComponente">
                <h2>Propiedades Componente</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.props.direccion}</h3>
                <h3>{this.props.dni}</h3>
                <h3>{this.props.tlf}</h3>
            </div>
        )
    }
}

export default FichaCliente;
