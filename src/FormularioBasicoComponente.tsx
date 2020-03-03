import React, {Component, FormEvent} from 'react';

class  FormularioBasicoComponente extends Component<any, any>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: FormEvent) {
        const name = (this.refs['name'] as any as HTMLInputElement).value.trim();
        console.log(name);
        this.setState({value: name});
    }

    handleSubmit(event: FormEvent) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render(): React.ReactElement{
        return (
            <div id="FormularioComponente">
                <h2>Formulario Básico Componente</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} ref="name" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <label>{this.state.value}</label>
            </div>
        )
    }
}

export default FormularioBasicoComponente;
