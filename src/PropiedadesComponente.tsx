import React, {Component} from 'react';

interface Props {
    name?: string;
    email?: string;
    age?: number;
}

class  PropiedadesComponente extends Component<Props>{
    static defaultProps = {
        name: "",
        email: "",
        age : 0
    };
    render(): React.ReactElement{
        return (
            <div id="PropiedadesComponente">
                <h2>Propiedades Componente</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.age}</h3>
            </div>
        )
    }
}

export default PropiedadesComponente;
