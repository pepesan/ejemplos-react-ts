import React, {Component, MouseEvent} from 'react';

interface EstadoBoton {
    numero: number;
}

class  EventosAGogo extends Component<any, EstadoBoton>{
    state : EstadoBoton;

    constructor(props: Readonly<any>){
        super(props);
        this.state = {
            numero : 0
        };
        //console.log(this.state);
        //asociación de los métodos a atributos
        this.pulsame = this.pulsame.bind(this);

    }
    render(): React.ReactElement{
        return (
            <div id="EventosComponente">
                <h2>Eventos Componente</h2>
                <button onClick={this.pulsame}>Incrementa</button>
                <label>{this.state.numero}</label>
            </div>

        )
    }
    /*
        Funcion de manejo de evento
     */
    pulsame(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        this.setState(state => ({
            numero: state.numero + 1
        }));
        console.log(this.state.numero);
    }

}

export default EventosAGogo;
