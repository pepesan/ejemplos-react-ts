import React, {Component} from 'react';
import {Link} from "react-router-dom";
interface MiListado {
    listado: string [];
}
class  Listado extends Component<any, MiListado>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            listado: ["Hola", "Adios"]
        }
    }
    render(): React.ReactElement{
        return (
            <div id="Listado">
                <h2>Listado</h2>
                <ul>

                    {this.state.listado.map(item => (
                        <li key={item}>

                            <Link to={{
                                pathname: "/listado/"+item
                            }}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Listado;
