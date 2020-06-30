import React, {Component, FormEvent, createRef} from 'react';

class  FormularioBasicoComponenteSinRef extends Component<any, any>{
    private myRef: React.RefObject<HTMLInputElement>;
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = createRef();

    }

    handleChange(event: FormEvent) {
        //const name = (this.refs['name'] as any as HTMLInputElement).value.trim();
        console.log(this.myRef);
        this.setState({value: (this.myRef.current as HTMLInputElement).value});
    }

    handleSubmit(event: FormEvent) {
        console.log('A name was submitted: ' + this.state.value);
        console.log(this.myRef.current);
        event.preventDefault();
    }
    render(): React.ReactElement{
        return (
            <div id="FormularioComponente">
                <h2>Formulario Básico Componente</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.state.value}
                            ref={this.myRef}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <label>{this.state.value}</label>
            </div>
        )
    }
}

export default FormularioBasicoComponenteSinRef;
