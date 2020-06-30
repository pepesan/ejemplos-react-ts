import React, {Component} from 'react';
interface LoginData {
    user: string | undefined;
    password: string;
}
class  FormularioLogin extends Component<any, LoginData>{
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            user: "pepe",
            password: "san"
        }
    }
    render(): React.ReactElement{
        return (
            <div id="FormularioLogin">
                <h2>Formulario</h2>
                <form>
                    <input type="text" value={this.state.user}/>
                    <input type="password" value={this.state.password}/>
                </form>
            </div>
        )
    }
}

export default FormularioLogin;
