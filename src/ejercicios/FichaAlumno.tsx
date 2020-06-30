import React, {Component} from 'react';

interface Alumno {
    nombre?: string;
    carrera?: string;
    asignaturas?: string[];
}

class  FichaAlumno extends Component<Alumno>{
    static defaultProps = {
        nombre: "",
        carrera: "",
        asignaturas : [],
    };
    render(): React.ReactElement{
        return (
            <div id="PropiedadesComponente">
                <h2>Propiedades Componente</h2>
                <h3>{this.props.nombre}</h3>
                <h3>{this.props.carrera}</h3>
                <h3>{this.props.asignaturas}</h3>
            </div>
        )
    }
}

export default FichaAlumno;
