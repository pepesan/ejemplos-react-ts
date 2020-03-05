import React, {Component} from 'react';
import axios from 'axios';
import './PeticionesWeb.css';
import {Partido} from "./partido";
import ShowPartido from "./ShowPartido";


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
                <table>
                    <tr><th>Nombre</th><th>Diputados</th><th>Logotipo</th></tr>
                    { this.state.persons.map((partido: Partido) =>{
                        return (
                            <ShowPartido partido={partido}/>
                            )
                        }
                    )
                    }
                </table>
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
