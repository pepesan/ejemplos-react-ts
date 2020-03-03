import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';




class  BootstrapComponente extends Component<any, any> {
    public render() {
        return (
            <div id="Bootstrap">
                <Alert key="1" variant="primary">
                    Mi alerta
                </Alert>
            </div>
        )
    }
}
export default BootstrapComponente;
