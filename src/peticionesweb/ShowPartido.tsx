import React, {Component} from 'react';
import {Partido} from "./partido";

interface IPartido {
    partido: Partido
}
class  ShowPartido extends Component<IPartido>{
    render(): React.ReactElement{
        const partido =this.props.partido;
        const imgurl= "https://cursosdedesarrollo.com/pactometro/img/"+partido.imagen;
        const alt="Logotipo del "+ partido.nombre;
        return (
            <tr key={partido.nombre}>
                <td  scope="row">{partido.nombre}</td> <td>{partido.dipu} escaños</td>
                <td><img src={imgurl} alt={alt}/></td>
            </tr>

        )
    }
}

export default ShowPartido;
