import React, {Component} from 'react';
import {Coche} from "./Coche";
import {CochesList} from "./CochesList";
import {AddCocheForm} from "./AddCocheForm";

interface State {
    newCoche: Coche;
    coches: Coche[];
}
class  CochesComponente extends Component<any, State>{
    state = {
        newCoche: {
            id: 1,
            nombre: ""
        },
        coches: [
        ]
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div id="CochesComponent">
                <h2>Componente de coches</h2>
                <AddCocheForm coche={this.state.newCoche} onAdd={this.addCoche} onChange={this.handleCocheChange}/>
                <CochesList coches={this.state.coches}  onDelete={this.deleteCoche}/>
            </div>
        );
    }
    private handleCocheChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newCoche: {
                ...this.state.newCoche,
                nombre: event.target.value
            }
        });
    };
    private addCoche = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState(previousState => ({
            newCoche: {
                id: previousState.newCoche.id + 1,
                nombre: ""
            },
            coches: [...previousState.coches, previousState.newCoche]
        }));
    };
    private deleteCoche = (cocheABorrar: Coche) => {
        this.setState(previousState => ({
            coches: [
                ...previousState.coches.filter(coche => coche.id !== cocheABorrar.id)
            ]
        }));
    };


}
export default CochesComponente;
