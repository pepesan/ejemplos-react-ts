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
        axios.get(`https://cursosdedesarrollo.com/pactometro/resultados.json`)
            .then(res => {
                const persons: Partido[] = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div id="PeticionesWeb">
                <ul>
                    { this.state.persons.map((partido: Partido) =>{
                        const imgurl= "https://cursosdedesarrollo.com/pactometro/img/"+partido.imagen;
                        return (
                        <li>
                            {partido.nombre}, {partido.dipu} escaños
                            <img src={imgurl}/>
                        </li>)
                        }
                    )
                    }
                </ul>
            </div>
        )
    }
}

export default PeticionesWeb;
