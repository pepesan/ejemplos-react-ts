import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {Link} from "react-router-dom";

class Detalle extends React.Component<RouteComponentProps<any>>
{

    render(): React.ReactElement {

        return (
            <div id="Detalle">
                <Link to="/listado">Listado</Link>
                <button onClick={() => { this.props.history.push('/listado') }}>volver</button>
                <h2>Detalle: {this.props.match.params.id}</h2>
            </div>
        )
    }
}

export default withRouter(Detalle);
