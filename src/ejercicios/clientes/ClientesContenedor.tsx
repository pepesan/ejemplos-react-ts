import React, {Component} from 'react';
import {Cliente} from './Cliente';
import {AddClienteForm} from './AddClienteForm';

interface Estado {
    clienteForm: Cliente;
    listadoClientes: Cliente[];
}

class ClientesContenedor extends Component<{},Estado>{
    state = {
      clienteForm:{
          id: 1,
          nombre: "",
          direccion: "",
          tlf: ""
      } ,
      listadoClientes: [
          {
              id:0,
              nombre: "Pepe",
              direccion: "Calle de mi casa",
              tlf: "+34 656661456"
          }
      ]
    };
    render(): React.ReactElement{
        return (
            <div id="ClientesContenedor">
                <h2>ClientesContenedor</h2>
                <AddClienteForm cliente={this.state.clienteForm} onChange={this.handleTaskChange}  onAdd={this.addClient}/>
                <ul>
                    {this.state.listadoClientes.map((cliente: Cliente) => (
                        <li key={cliente.id}>  {cliente.nombre}: {cliente.direccion}: {cliente.tlf}</li>
                    ))}
                </ul>
            </div>
        )
    }
    private addClient = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState(previousState => ({
            clienteForm: {
                id: previousState.clienteForm.id + 1,
                nombre: "",
                direccion: "",
                tlf: ""
            },
            listadoClientes: [...previousState.listadoClientes, previousState.clienteForm]
        }));
    };

    private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id == 'nombre'){
            this.setState({
                clienteForm: {
                    ...this.state.clienteForm,
                    nombre: event.target.value
                }
            });
        }
        if (event.target.id == 'dir'){
            this.setState({
                clienteForm: {
                    ...this.state.clienteForm,
                    direccion: event.target.value
                }
            });
        }
        if (event.target.id == 'tlf'){
            this.setState({
                clienteForm: {
                    ...this.state.clienteForm,
                    tlf: event.target.value
                }
            });
        }
    };

}

export default ClientesContenedor;
