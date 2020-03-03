import React, {Component} from 'react';
interface MiEstado {
    healthPoints: number | undefined;
}
class  EstadoComponente extends Component<any, MiEstado>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            healthPoints :10
        }
    }
    render(): React.ReactElement{
        return (
            <div id="EstadoComponente">
                <h2>Estado Componente</h2>
                <h3>{this.state.healthPoints}</h3>
            </div>
        )
    }
}

export default EstadoComponente;
