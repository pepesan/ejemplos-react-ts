import React, {Component} from 'react';

interface Propiedades {
    name?: string;
    email?: string;
    fecha?: Date;
    age?: number | string ;
}

class  MisProps extends Component<Propiedades>{
    static defaultProps = {
        name: "",
        email: "",
        age : 0,
        fecha: new Date(),
    };
    render(): React.ReactElement{
        return (
            <div id="PropiedadesComponente">
                <h2>Propiedades Componente</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.age}</h3>
                <h3>{this.props.fecha?.getDate()} {this.props.fecha?.getMonth()}{this.props.fecha?.getUTCFullYear()}</h3>
            </div>
        )
    }
}

export default MisProps;
