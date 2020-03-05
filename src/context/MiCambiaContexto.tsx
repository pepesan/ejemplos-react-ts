import React, {Component} from 'react';
import {AppContext} from "./contexto";

class  MiCambiaContexto extends Component{
    render(): React.ReactElement{
        return (
            <AppContext.Consumer>{
                appcontext =>
                {
                    return(
                        <div id="MiCambiaContexto">
                            <h2>MiCambiaContexto</h2>
                        </div>

                    )
                }

            }
            </AppContext.Consumer>

        )
    }
}

export default MiCambiaContexto;
