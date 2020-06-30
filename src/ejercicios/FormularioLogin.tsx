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
                    <label >Usuario</label>
                    <input id="user_input"type="text" value={this.state.user}/><br/>
                    <label>{this.state.user}</label><br/>
                    <label>Password</label>
                    <input id="password_input" type="password" value={this.state.password}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default FormularioLogin;
