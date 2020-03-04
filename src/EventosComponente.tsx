import React, {Component, MouseEvent} from 'react';

interface EstadoBoton {
    numero: number;
}

class  EventosComponente extends Component<any, EstadoBoton>{
    state : EstadoBoton= {
        numero : 0
    };

    constructor(props: Readonly<any>){
        super(props);
        //console.log(this.state);
        //asociación de los métodos a atributos
        this.pulsame = this.pulsame.bind(this);
        this.increment = this.increment.bind(this);
    }
    render(): React.ReactElement{
        return (
            <div id="EventosComponente">
                <h2>Eventos Componente</h2>
                <button onClick={this.pulsame}>Incrementa</button>
                <h3>Estado: {this.state.numero}</h3>
            </div>

        )
    }
    /*
        Funcion de manejo de evento
     */
    pulsame(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        console.log(event.target);
        this.increment(1)
    }
    /*
    Función de manejo de estado
     */
    increment(amt: number){
        // like this
        this.setState(state => ({
            numero: state.numero + amt
        }));
    }
}

export default EventosComponente;
