import React, {Component} from 'react';

interface EstadoBoton {
    numero: number;
}

class  EventosComponente extends Component<{}, EstadoBoton>{
    state : EstadoBoton= {
        numero : 0
    };

    constructor(){
        super({});
        console.log(this.state);
    }
    render(): React.ReactElement{
        return (
            <div id="EventosComponente">
                <h2>Eventos Componente</h2>
                <button onClick={() => this.increment(1)}>Dale click</button>
                <h3>Estado: {this.state.numero}</h3>
            </div>

        )
    }

    increment = (amt: number) => {
        // like this
        this.setState(state => ({
            numero: state.numero + amt
        }));
    };
}

export default EventosComponente;
