import React, {Component} from 'react';
import SubComponente from "./SubComponente";

class  SuperComponente extends Component{
    render(): React.ReactElement{
        return (
            <div id="SuperComponente">
                <h2>Super Componente</h2>
                <SubComponente/>
            </div>
        )
    }
}

export default SuperComponente;
