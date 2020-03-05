import React, {Component} from 'react';
import axios from 'axios';
import './PeticionesWeb.css';

interface Partido {
    nombre: string;
    dipu: number;
    imagen: string;
}
interface IState {
    persons: Partido [];
}

class  PeticionesWeb extends Component{
    state = {
        persons: []
    };

    componentDidMount() {
        this.recarga();
    }

    render() {
        return (
            <div id="PeticionesWeb">
                <button onClick={this.recarga}>Recarga</button>
                <ul>
                    { this.state.persons.map((partido: Partido) =>{
                        const imgurl= "https://cursosdedesarrollo.com/pactometro/img/"+partido.imagen;
                        const alt="Logotipo del "+ partido.nombre;
                        return (
                        <li key={partido.nombre}>
                            {partido.nombre}, {partido.dipu} escaños
                            <img src={imgurl} alt={alt}/>
                        </li>)
                        }
                    )
                    }
                </ul>
            </div>
        )
    }
    // necesitamos definirlo de esta manera para que no falle
    recarga = () =>{
        axios.get(`https://cursosdedesarrollo.com/pactometro/resultados.json`)
            .then(res => {
                const persons: Partido[] = res.data;
                console.log(persons);
                this.setState({ persons });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export default PeticionesWeb;
